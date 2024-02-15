function showText() {
   let text = "Hello World!";

   return text;
}


function showText1() {
   let text = "Hello World2!";

   return text;
} 
module.exports = { showText,showText1 };

/****************************************/
/****************************************/
/****************************************/

const express = require('express');

const hostname = "0.0.0.0";
const port = 3000;

const server = express();

server.use(express.urlencoded());
server.use(express.json());

server.use('/', express.static(__dirname + '/'));

server.listen(port, hostname);