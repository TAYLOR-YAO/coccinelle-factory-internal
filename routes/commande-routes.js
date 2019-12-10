const express = require("express");
const mongoose = require("mongoose");
const db = require("../models");
const router = express.Router();


router.post("/commmander", (req, res)=>{
    db.Commande.create(req.body).then(commande=>{
        res.json(commande)
    })
    .catch(function(err) {
        console.error("ERR.....",err);
    })
});
router.get("/commmander", (req, res)=>{
    db.Commande.find({}).then(commande=>{
        res.json(commande)
    })
    .catch(function(err) {
        console.error("ERR.....",err);
    })
});
module.exports = router;