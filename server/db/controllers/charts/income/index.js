const incomeModel = require("../../../models/charts/income");

async function getIncomeData(req, res) {
  const year = req.params.year;
  try {
    const data = await incomeModel.getYearlyTotalIncome(year);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching income data:", error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getIncomeData,
};
