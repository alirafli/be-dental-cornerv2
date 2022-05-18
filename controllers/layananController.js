const db = require("../models");

const Layanan = db.layanan;
const Admin = db.admin;

//add layanan
const addLayanan = async (req, res) => {
  let info = {
    nama_layanan: req.body.nama_layanan,
    admin_id: req.body.admin_id,
  };

  const layanan = await Layanan.create(info);
  res.status(200).send(layanan);
  console.log(layanan);
};

//get layanan
const getAllLayanan = async (req, res) => {
  let layanan = await Layanan.findAll({});
  res.status(200).send(layanan);
};

//get layanan by id
const getOneLayanan = async (req, res) => {
  let id = req.params.id;
  let layanan = await User.findOne({ where: { id: id } });
  res.status(200).send(layanan);
};

//delete layanan

module.exports = {
  getAllLayanan,
  addLayanan,
  getOneLayanan,
};
