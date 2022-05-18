module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define("appointment", {
    jenis: {
      type: DataTypes.STRING,
    },
    no_antrian: {
      type: DataTypes.INTEGER,
    },
    tanggal: {
      type: DataTypes.DATE,
    },
  });

  return Appointment;
};
