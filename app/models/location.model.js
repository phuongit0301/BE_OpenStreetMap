module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define("location", {
      name: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      },
      lng: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.TINYINT
      }
    });
  
    return Location;
  };