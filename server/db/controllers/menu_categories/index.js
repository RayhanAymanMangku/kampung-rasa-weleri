const menuCategoriesModel = require("../../models/menu_categories");
async function getKategoriMenu(req, res) {
  try {
    const kategoriMenu = await menuCategoriesModel.getKategoriMenu();
    res.json(kategoriMenu);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

module.exports = {
  getKategoriMenu,
};
