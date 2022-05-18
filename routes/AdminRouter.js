//import controller user
const adminController = require("../controllers/adminController.js");

// router
const router = require("express").Router();

// use routers
router.post("/", adminController.addAdmin);
router.get("/", adminController.getAllAdmin);

module.exports = router