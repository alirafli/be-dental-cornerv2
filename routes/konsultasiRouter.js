//import controller dokter
const konsultasiController = require("../controllers/konsultasiController.js");

// router
const router = require("express").Router();

// use routers
router.post("/", konsultasiController.addKonsultasi);
router.get("/", konsultasiController.getAllKonsultasi);

//by id
router.get('/:id', konsultasiController.getKonsultasiUser)


module.exports = router