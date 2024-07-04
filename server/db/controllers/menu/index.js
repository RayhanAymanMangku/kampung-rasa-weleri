const menusModel = require("../../models/menu");

async function getDataMenus(req, res) {
  try {
    const dataMenus = await menusModel.getMenus();
    res.json(dataMenus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getDataMenus,
};
