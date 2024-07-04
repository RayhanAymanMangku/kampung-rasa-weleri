async function sendWhatsAppMessage(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  const { namaCustomer, jumlahOrang, jenisEvent, tanggal } = req.body;
  const noWa = "+6281392081108"; // fixed target number

  const message = `Nama: ${namaCustomer}\nJumlah Orang: ${jumlahOrang}\nJenis Event: ${jenisEvent}\nTanggal: ${tanggal}\nHalo, Apakah bisa saya mendapatkan informasi lebih lanjut mengenai reservasi event saya?`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${noWa}&text=${encodedMessage}`;

  res.json({ whatsapp_url: whatsappUrl });
}

module.exports = {
  sendWhatsAppMessage,
};
