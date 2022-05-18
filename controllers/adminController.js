const db = require('../models')

const Admin = db.admin

//add admin
const addAdmin = async (req, res) => {
  let info = {
    nama: req.body.nama,
    email: req.body.email,
    password: req.body.password,
    alamat: req.body.alamat,
    jenis_kelamin: req.body.jenis_kelamin,
    no_hp: req.body.no_hp,
  };

  const admin = await Admin.create(info);
  res.status(200).send(admin);
  console.log(admin);
};

//get all admin
const getAllAdmin = async (req, res) => {
  let admin = await Admin.findAll({});
  res.status(200).send(admin);
};
// 

module.exports = {
  addAdmin,
  getAllAdmin
};
