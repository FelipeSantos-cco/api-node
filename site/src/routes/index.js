const express = require("express");
const rota = express.Router();

rota.get("/", (req, res) =>{
    res.render("index", { title: "Express" });
});

module.exports = rota;