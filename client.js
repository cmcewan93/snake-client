const net = require('net');
const constants = require('./constants.js')
/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({ 
    host: constants.IP,
    port: constants.PORT
  });
  conn.on('data', (data) => {
    console.log(data);
  });
  conn.on('connect', () => {
    console.log('I have connected')
  })
  conn.on('connect', () => {
    conn.write('Name: CM');
  })
  
  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write('Move: up');
  //   }, 500)
  // })
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = {connect}