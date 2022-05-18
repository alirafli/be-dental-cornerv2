module.exports = (sequelize, DataTypes) => {
  const Konsultasi = sequelize.define("konsultasi", {
    no_antrian: {
      type: DataTypes.INTEGER,
    },
    tanggal: {
      type: DataTypes.DATE,
    },
  });

  return Konsultasi;
};
