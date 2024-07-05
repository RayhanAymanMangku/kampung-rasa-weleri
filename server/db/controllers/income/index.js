const incomeModel = require("../../models/income");

async function getIncome(req, res) {
  try {
    const incomeData = await incomeModel.calculateIncome();
    res.status(200).json(incomeData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getIncome,
};
