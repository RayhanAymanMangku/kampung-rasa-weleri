const orderChartModel = require("../../../models/charts/orders");

async function getOrderChartData(req, res) {
  const year = req.params.year;
  try {
    const data = await orderChartModel.getMonthlyCombinedData(year);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getOrderChartData,
};
