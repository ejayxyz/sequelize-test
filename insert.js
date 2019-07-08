let readline = require('readline-sync');
let name = readline.question('Add meg a játék nevét.');
let descr = readline.question('Add meg a játék leírását.');

console.log('insert into games (name, description) values("' + name + '", "' + descr + '");');
