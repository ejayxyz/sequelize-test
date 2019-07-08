const { table } = require('table');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:dmArtini1994@localhost/zeta_test');
// console.log(sequelize);

sequelize
  .authenticate()
  .then(() => {
    sequelize.query('select * from games').then(result => {
      let row = result[0];
      let matrix = [];
      for (let i = 0; i < row.length; i++) {
        matrix.push([
          row[i].id,
          row[i].name,
          row[i].description
        ]);
      }
      console.log(table(matrix));
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
