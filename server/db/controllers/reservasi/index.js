const Reservasi = require("../../models/reservasi");
const getAllReservasi = async (req, res) => {
  try {
    const reservasi = await Reservasi.getAll();
    res.json(reservasi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getReservasiById = async (req, res) => {
  try {
    const reservasi = await Reservasi.getById(req.params.id);
    if (reservasi) {
      res.json(reservasi);
    } else {
      res.status(404).json({ error: "Reservasi not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createReservasi = async (req, res) => {
  try {
    const newReservasi = await Reservasi.create(req.body);
    res.status(201).json(newReservasi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteReservasi = async (req, res) => {
  try {
    const deleted = await Reservasi.delete(req.params.id);
    if (deleted) {
      res.json({ message: "Reservasi deleted" });
    } else {
      res.status(404).json({ error: "Reservasi not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllReservasi,
  getReservasiById,
  createReservasi,

  deleteReservasi,
};
