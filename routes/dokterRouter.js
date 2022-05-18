//import controller dokter
const dokterController = require("../controllers/dokterController.js");

// router
const router = require("express").Router();

// use routers
router.post("/", dokterController.addDokter);
router.get("/", dokterController.getAllDokter);

//by id
router.get('/:id', dokterController.getDokterById)


module.exports = router