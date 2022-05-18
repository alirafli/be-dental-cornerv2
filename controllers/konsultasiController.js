const db = require("../models");

const Konsultasi = db.konsultasi;
const Dokter = db.dokter;
var rn = require("random-number");
const { dokter } = require("../models");
var options = {
  min: 1,
  max: 500,
  integer: true,
};

//add konsultasi
const addKonsultasi = async (req, res) => {
  let info = {
    no_antrian: rn(options),
    tanggal: req.body.tanggal,
    user_id: req.body.user_id,
    dokter_id: req.body.dokter_id,
  };

  const konsultasi = await Konsultasi.create(info);
  res.status(200).send(konsultasi);
  console.log(konsultasi);
};

//get all konsultasi
const getAllKonsultasi = async (req, res) => {
  let konsultasi = await Konsultasi.findAll({});
  res.status(200).send(konsultasi);
};

//get konsultasi by user id
const getKonsultasiUser = async (req, res) => {
  let id = req.params.id;
  let konsultasi = await Konsultasi.findAll({ where: { user_id: id } });
  const response = await Promise.all(
    konsultasi.map(async (data) => {
      const dataDokter = await dokter.findByPk(data.dokter_id);
      return { data, dataDokter };
    })
  );
  res.status(200).send(response);
};

module.exports = {
  addKonsultasi,
  getAllKonsultasi,
  getKonsultasiUser,
};
