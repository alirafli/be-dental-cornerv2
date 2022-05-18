module.exports = (sequelize, DataTypes) => {
  const MedicalLog = sequelize.define("medical_log");

  return MedicalLog;
};
