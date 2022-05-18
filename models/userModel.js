module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
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

  return User;
};
