const staffModel = require("../../models/admin");

const getStaff = async (req, res) => {
  try {
    const staff = await staffModel.getStaff();
    if (staff.length === 0) {
      res.json([]);
    } else {
      res.json(staff);
    }
  } catch (error) {
    console.error("Error fetching staff:", error);
    res.status(500).json({ error: "Error fetching staff data" });
  }
};

const deleteStaff = async (req, res) => {
  const { id_staf } = req.body;
  if (!id_staf) {
    res.status(400).json({ error: "No staff ID provided" });
    return;
  }

  try {
    const result = await staffModel.deleteStaffById(id_staf);
    if (result) {
      res.json({
        success: true,
        message: `Staff with ID ${id_staf} deleted successfully`,
      });
    } else {
      res
        .status(404)
        .json({ success: false, error: `Staff with ID ${id_staf} not found` });
    }
  } catch (error) {
    console.error("Error deleting staff:", error);
    res.status(500).json({ error: "Error deleting staff" });
  }
};

module.exports = {
  getStaff,
  deleteStaff,
};
