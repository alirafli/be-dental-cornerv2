module.exports = (sequelize, DataTypes) => {
  const Artikel = sequelize.define("artikel", {
    konten: {
      type: DataTypes.TEXT,
    },
  });

  return Artikel;
};
