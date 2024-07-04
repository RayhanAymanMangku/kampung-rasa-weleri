const outcomeModel = require("../../models/outcome");

const createOutcome = async (req, res) => {
  try {
    const data = req.body;

    if (
      !data.namaPengeluaran ||
      !data.jumlahPengeluaran ||
      !data.tanggalPengeluaran ||
      !data.keterangan
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await outcomeModel.createOutcome(data);
    res.status(201).json({ message: "Data pengeluaran berhasil disimpan" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error executing the query: " + error.message });
  }
};

const getOutcomes = async (req, res) => {
  try {
    const totalOutcome = await outcomeModel.getTotalOutcome();
    const outcomes = await outcomeModel.getAllOutcomes();

    res.json({
      totalPengeluaran: totalOutcome.totalPengeluaran,
      data: outcomes,
    });
  } catch (error) {
    res.status(500).json({ error: "Error retrieving data: " + error.message });
  }
};

const deleteOutcome = async (req, res) => {
  try {
    const { idPengeluaran } = req.body;

    if (!idPengeluaran) {
      return res.status(400).json({ error: "ID is required" });
    }

    await outcomeModel.deleteOutcome(idPengeluaran);
    res.json({ message: "Data pengeluaran berhasil dihapus" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error executing the query: " + error.message });
  }
};

module.exports = {
  createOutcome,
  getOutcomes,
  deleteOutcome,
};
