module.exports = (sequelize, DataTypes) => {
  const Layanan = sequelize.define("layanan", {
    nama_layanan: {
      type: DataTypes.STRING,
    },
  });

  return Layanan;
};
