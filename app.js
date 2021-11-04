const express = require("express");
const path = require("path");
const ejs = require("ejs");
const productos = require("./functions.js");

const app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //res.sendFile(path.join(__dirname, "./views/home.html"));
  res.render("home", { productos });
});

app.get("/contacto", (req, res) => {
  //res.sendFile(path.join(__dirname, "./views/contacto.html"));
  res.render("contacto");
});

app.get("/galeria", (req, res) => {
  //res.sendFile(path.join(__dirname, "./views/galeria.html"));
  res.render("galeria");
});

app.get("/carrito", (req, res) => {
  //res.sendFile(path.join(__dirname, "./views/carrito.html"));
  res.render("carrito");
});

app.listen(3030, () => {
  console.log("Servidor de MercadoLiebre corriendo");
});
