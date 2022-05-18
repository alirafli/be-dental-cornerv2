const db = require("../models");

const User = db.user;

//create user
const addUser = async (req, res) => {
  let info = {
    nama: req.body.nama,
    email: req.body.email,
    password: req.body.password,
    alamat: req.body.alamat,
    jenis_kelamin: req.body.jenis_kelamin,
    no_hp: req.body.no_hp,
  };

  const user = await User.create(info);
  res.status(200).send(user);
  console.log(user);
};

//get all user
const getAllUsers = async (req, res) => {
  let user = await User.findAll({});
  res.status(200).send(user);
};

//get user by id
const getOneUser = async (req, res) => {
  let id = req.params.id;
  let user = await User.findOne({ where: { id: id } });
  res.status(200).send(user);
};

//get user by login
const getUserByLogin = async (req, res) => {
  let info = {
    email: req.body.email,
    password: req.body.password,
  };

  let user = await User.findOne({
    where: { email: info.email, password: info.password },
  });
  res.status(200).send(user);
};

module.exports = {
  getAllUsers,
  addUser,
  getOneUser,
  getUserByLogin,
};
