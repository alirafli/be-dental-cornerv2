//import controller layanan
const layananController = require("../controllers/layananController.js");

// router
const router = require("express").Router();

// use routers
router.post("/", layananController.addLayanan);
router.get("/", layananController.getAllLayanan);

//get layanan by id
router.get('/:id', layananController.getOneLayanan)

module.exports = router