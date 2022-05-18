const db = require("../models");
const { layanan } = require("../models");
const { dokter } = require("../models");


const Appointment = db.appointment;
const Layanan = db.layanan;
var rn = require("random-number");
var options = {
  min: 1,
  max: 500,
  integer: true,
};

//create appointment
const addAppointment = async (req, res) => {
  let info = {
    jenis: req.body.jenis,
    no_antrian: rn(options),
    tanggal: req.body.tanggal,
    layanan_id: req.body.layanan_id,
    user_id: req.body.user_id,
    dokter_id: req.body.dokter_id,
  };

  const appointment = await Appointment.create(info);
  res.status(200).send(appointment);
  console.log(appointment);
};

//get all appointment
const getAllAppointment = async (req, res) => {
  let appointment = await Appointment.findAll({});
  res.status(200).send(appointment);
};

//get a appointment by user id

const getAppbyUserId = async (req, res) => {
  let id = req.params.id;
  let appointment = await Appointment.findAll({ where: { user_id: id } });
  const response = await Promise.all(
    appointment.map(async (data) => {
      const dataLayanan = await layanan.findByPk(data.layanan_id);
      const dataDokter = await dokter.findByPk(data.dokter_id);
      return { data, dataLayanan, dataDokter };
    })
    
  );
  res.status(200).send(response);
};

module.exports = {
  addAppointment,
  getAllAppointment,
  getAppbyUserId,
};
