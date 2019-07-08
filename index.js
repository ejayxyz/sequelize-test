const { table } = require('table');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:dmArtini1994@localhost/zeta_test');
// console.log(sequelize);

sequelize
  .authenticate()
  .then(() => {
    sequelize.query('select * from games').then(result => {
      let n = result[0];
      let matrix = [];
      for (let i = 0; i < n.length; i++) {
        matrix.push([
          n[i].id,
          n[i].name,
          n[i].description
        ]);
      }
      console.log(table(matrix));
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
