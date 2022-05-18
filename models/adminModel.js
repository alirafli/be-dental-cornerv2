module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define("admin", {
    nama: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    alamat: {
      type: DataTypes.STRING,
    },
    jenis_kelamin: {
      type: DataTypes.STRING,
    },
    no_hp: {
      type: DataTypes.STRING,
    },
  });

  return Admin;
};
