const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./userModel.js")(sequelize, DataTypes);
db.admin = require("./adminModel.js")(sequelize, DataTypes);
db.layanan = require("./layananModel.js")(sequelize, DataTypes);
db.appointment = require("./appointmentModel.js")(sequelize, DataTypes);
db.konsultasi = require("./konsultasiModel.js")(sequelize, DataTypes);
db.artikel = require("./artikelModel.js")(sequelize, DataTypes);
db.dokter = require("./dokterModel.js")(sequelize, DataTypes);
db.medicalLog = require("./medicalLogModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

// 1 to Many Relation
//admin to layanan
db.admin.hasMany(db.layanan, {
  foreignKey: "admin_id",
  as: "layanan",
});
db.layanan.belongsTo(db.admin, {
  foreignKey: "admin_id",
  as: "admin",
});

// layanan to appointment
db.layanan.hasMany(db.appointment, {
  foreignKey: "layanan_id",
  as: "appointment",
});
db.appointment.belongsTo(db.layanan, {
  foreignKey: "layanan_id",
  as: "layanan",
});

//user to appointment
db.user.hasMany(db.appointment, {
  foreignKey: "user_id",
  as: "appointment",
});
db.appointment.belongsTo(db.user, {
  foreignKey: "user_id",
  as: "user",
});

//user to medical log
db.user.hasMany(db.medicalLog, {
  foreignKey: "user_id",
  as: "medicalLog",
});
db.medicalLog.belongsTo(db.user, {
  foreignKey: "user_id",
  as: "user",
});

//user to konsultasi
db.user.hasMany(db.konsultasi, {
  foreignKey: "user_id",
  as: "konsultasi",
});
db.konsultasi.belongsTo(db.user, {
  foreignKey: "user_id",
  as: "user",
});

//dokter to konsultasi
db.dokter.hasMany(db.konsultasi, {
  foreignKey: "dokter_id",
  as: "konsultasi",
});
db.konsultasi.belongsTo(db.dokter, {
  foreignKey: "dokter_id",
  as: "dokter",
});

//dokter to appointment
db.dokter.hasMany(db.appointment, {
  foreignKey: "dokter_id",
  as: "appointment",
});
db.appointment.belongsTo(db.dokter, {
  foreignKey: "dokter_id",
  as: "dokter",
});

//appointment to medical log
db.appointment.hasMany(db.medicalLog, {
  foreignKey: "appointment_id",
  as: "medicalLog",
});
db.medicalLog.belongsTo(db.appointment, {
  foreignKey: "appointment_id",
  as: "appointment",
});

//konsultasi tomedical log
db.konsultasi.hasMany(db.medicalLog, {
  foreignKey: "konsultasi_id",
  as: "medicalLog",
});
db.medicalLog.belongsTo(db.konsultasi, {
  foreignKey: "konsultasi_id",
  as: "konsultasi",
});

module.exports = db;
