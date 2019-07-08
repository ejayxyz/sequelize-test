const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://tasi:tasi@192.168.5.123/zeta_test');
console.log(sequelize);
sequelize
  .authenticate()
  .then(() => {
    sequelize.query('select * from games').then(result => {
      console.log(result);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
