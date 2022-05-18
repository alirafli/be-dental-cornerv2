//import controller user
const userController = require("../controllers/userController.js");

// router
const router = require("express").Router();

// use routers
router.post("/", userController.addUser);
router.get("/", userController.getAllUsers);
router.post("/login", userController.getUserByLogin);

//user by id
router.get('/:id', userController.getOneUser)

module.exports = router