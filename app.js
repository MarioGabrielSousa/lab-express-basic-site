const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/intro", (request, response) => {
  response.sendFile(__dirname + "/views/intro.html");
});

app.get("/home", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/photos", (request, response) => {
  response.sendFile(__dirname + "/views/photos.html");
});

app.get("/itoldyou", (request, response) => {
  response.sendFile(__dirname + "/views/itoldyou.html");
});

app.listen(3000, () => {
  console.log("My app is listening on port 3000");
});
