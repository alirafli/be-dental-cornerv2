const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.options("*", cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//routers
const userRouter = require("./routes/userRouter.js");
const LayananRouter = require("./routes/LayananRouter.js");
const AdminRouter = require("./routes/AdminRouter.js");
const DokterRouter = require("./routes/dokterRouter.js");
const KonsultasiRouter = require("./routes/konsultasiRouter.js");
const AppointmentRouter = require("./routes/appointmentRouter.js");
app.use("/api/user", userRouter);
app.use("/api/admin", AdminRouter);
app.use("/api/layanan", LayananRouter);
app.use("/api/dokter", DokterRouter);
app.use("/api/konsultasi", KonsultasiRouter);
app.use("/api/appointment", AppointmentRouter);

//testing
app.get("/", (req, res) => {
  res.json({ massage: "halo from api" });
});

//port
const PORT = process.env.PORT || 8080;

//server run
app.listen(PORT, () => {
  console.log(`server is run on port ${PORT}`);
});
