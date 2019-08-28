/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
let connection;
const constants = require('./constants.js')

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data',handleUserInput);
  stdin.resume();
  return stdin;
}

const handleUserInput = ('data', (data) => {
  if (data === "\u0003") { //checks ctrl + c to exit
    process.exit();
  } else if (data === constants.MOVE_UP_KEY) {
    connection.write('Move: up');
  } else if (data === constants.MOVE_LEFT_KEY) {
    connection.write('Move: left');
  } else if (data === constants.MOVE_DOWN_KEY) {
    connection.write('Move: down');
  } else if (data === constants.MOVE_RIGHT_KEY) {
    connection.write('Move: right');
  } else if (data === '\u0074') {
    connection.write('Say: You suck')
  }
})

module.exports = {setupInput}