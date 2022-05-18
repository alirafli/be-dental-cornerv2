//import controller user
const appointmentController = require("../controllers/appointmentController.js");

// router
const router = require("express").Router();

// use routers
router.post("/", appointmentController.addAppointment);
router.get("/", appointmentController.getAllAppointment);

//get layanan by id
router.get('/:id', appointmentController.getAppbyUserId)

module.exports = router