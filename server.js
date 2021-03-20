const express = require("express");
const cors = require("cors");
const app = express();
var SerialPort = require("serialport");

app.use(cors());

const parsers = SerialPort.parsers;
const parser = new parsers.Readline({
  delimiter: "\r\n",
});

var port = new SerialPort("/dev/cu.usbmodem143401", {
  baudRate: 9600,
  dataBits: 8,
  parity: "none",
  stopBits: 1,
  flowControl: false,
});

port.pipe(parser);

parser.on("data", function (data) {
  console.log(data);
});

//redirection link

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);
