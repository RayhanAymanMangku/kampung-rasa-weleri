const loginModel = require("../../models/login");

const loginController = {
  loginUser: async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ success: false, error: "Username and password are required" });
    }

    try {
      const user = await loginModel.getUserByUsername(username);
      if (user && password === user.password) {
        if (!req.session) {
          req.session = {};
        }
        req.session.username = user.username;
        return res.status(200).json({
          success: true,
          session: req.session,
          username: user.username,
        });
      } else {
        return res
          .status(401)
          .json({ success: false, error: "Invalid username or password" });
      }
    } catch (error) {
      console.error("Database query failed:", error);
      return res
        .status(500)
        .json({ success: false, error: "Database query failed" });
    }
  },
};

module.exports = loginController;
