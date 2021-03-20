const express = require("express");
const cors = require("cors");
const app = express();
var SerialPort = require("serialport");
var MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://arbind:1234@cluster0.mrtm2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var name, varname;
var passwd, varpasswd;

var Data;
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
  Data = data;
});

//redirection link

const body = [];
app.use("/login", (req, res) => {
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const test = Buffer.concat(body).toString();
    console.log(test);
    varname = test.username;
    varpasswd = test.passwd;
  });

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").findOne({}, function (err, result) {
      if (err) throw err;
      name = result.userName;
      passwd = result.password;
      console.log(name);
      console.log(passwd);
      db.close();
    });
  });
  if (name == varname && passwd == varpasswd) {
    res.send({
      token: "test123",
    });
  }
});

app.use("/data", (req, res) => {
  res.send(Data);
});

app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);
