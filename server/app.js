require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3060;
const cors = require("cors");
const path = require("path");
const middleware = require("./db/middleware");

const session = require("express-session");
const bodyParser = require("body-parser");

const menuRoutes = require("./db/routes/menu");
const customerRoutes = require("./db/routes/customer");
const orderRoutes = require("./db/routes/orders");
const order2Routes = require("./db/routes/orders_2");
const menu_categoriesRoutes = require("./db/routes/menu_categories");
const chatbotRoutes = require("./db/routes/chatbot");
const adminRoutes = require("./db/routes/admin");
const orderChartRoutes = require("./db/routes/charts/orders");
const incomeChartRoutes = require("./db/routes/charts/income");
const outcomeRoutes = require("./db/routes/outcome");
const reservasiRoutes = require("./db/routes/reservasi");
const whatsappRoutes = require("./db/routes/whatsapp");
const loginRoutes = require("./db/routes/login");
const midtransRoutes = require("./db/routes/payment");
const midtransRoutes2 = require("./db/routes/payment_dinein");
const midtransClient = require("midtrans-client");

const { Server } = require("http");

app.use(express.json());
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      callback(null, true);
    } else if (origin === "http://localhost:3000") {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["DELETE", "GET", "PATCH", "POST", "PUT"],
};

// middleware
app.use(cors(corsOptions));
app.use(middleware);
app.use(express.static(path.join(__dirname, "client/public")));

// route
app.use(menuRoutes);
app.use(customerRoutes);
app.use(orderRoutes);
app.use(order2Routes);
app.use(chatbotRoutes);
app.use(menu_categoriesRoutes);
app.use(adminRoutes);
app.use(orderChartRoutes);
app.use(incomeChartRoutes);
app.use(outcomeRoutes);
app.use(reservasiRoutes);
app.use(whatsappRoutes);
app.use(loginRoutes);
app.use(midtransRoutes);
app.use(midtransRoutes2);
app.use(bodyParser.json());

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// app.get("/", (req, res) => {
//   const host = req.get("Host");
//   if (host === "13.239.57.225:3060") {
//     res.send("Custom message for http://13.239.57.225:3060/");
//   } else {
//     res.send("Welcome to the server");
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

console.log("mitrans client", midtransClient);
console.log("midtrans client", process.env.MIDTRANS_SERVER_KEY);

module.exports = app;
