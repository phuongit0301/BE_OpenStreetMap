module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Phuongit31",
    DB: "test_nodejs",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };