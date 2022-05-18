const db = require("../models");

const Dokter = db.dokter;

//add dokter
const addDokter = async (req, res) => {
  let info = {
    nama: req.body.nama,
    jadwal: req.body.jadwal,
    spesialis: req.body.spesialis,
  };

  const dokter = await Dokter.create(info);
  res.status(200).send(dokter);
  console.log(dokter);
};

//get all dokter
const getAllDokter = async (req, res) => {
  let dokter = await Dokter.findAll({});
  res.status(200).send(dokter);
};

//edit dokter

//

//get dokter by id
const getDokterById = async (req, res) => {
  let id = req.params.id;
  let dokter = await Dokter.findOne({ where: { id: id } });
  res.status(200).send(dokter);
};

module.exports = {
  addDokter,
  getAllDokter,
  getDokterById,
};
