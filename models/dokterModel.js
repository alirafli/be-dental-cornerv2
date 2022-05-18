module.exports = (sequelize, DataTypes) => {
  const Dokter = sequelize.define("dokter", {
    nama: {
      type: DataTypes.STRING,
    },
    jadwal: {
      type: DataTypes.STRING,
    },
    spesialis: {
      type: DataTypes.STRING,
    },
  });

  return Dokter;
};
