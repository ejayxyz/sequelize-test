const { table } = require('table');
let readline = require('readline-sync');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:dmArtini1994@localhost/zeta_test');
// console.log(sequelize);

let newData;
newData = readline.question('Szeretnél új adatot felvenni? Válaszolj Igen/Nem szavakkal.');
switch (newData) {
  case 'Igen':
    let name = readline.question('Add meg a játék nevét.');
    let descr = readline.question('Add meg a játék leírását.');
    let str = 'insert into games (name, description) values("' + name + '", "' + descr + '");';
    sequelize
      .authenticate()
      .then(() => {
        sequelize.query(str).then(result => {
          sequelize.query('select * from games;').then(result => {
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
        });
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });
    break;
  case 'Nem':
    sequelize
      .authenticate()
      .then(() => {
        sequelize.query('select * from games;').then(result => {
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
    break;
  default:
    console.log('Helytelen választás. A program kilép.');
    process.exit();
}
