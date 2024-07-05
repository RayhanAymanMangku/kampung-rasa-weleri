const menusModel = require("../../models/menu");

async function getDataMenus(req, res) {
  try {
    const dataMenus = await menusModel.getMenus();
    res.json(dataMenus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createMenu(req, res) {
  try {
    const menu = req.body;
    const newMenu = await menusModel.createMenu(menu);
    res.json(newMenu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteMenu(req, res) {
  try {
    const { idMenu } = req.params;
    const deletedMenu = await menusModel.deleteMenu(idMenu);
    res.json(deletedMenu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getDataMenus,
  createMenu,
  deleteMenu,
};
