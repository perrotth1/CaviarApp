const express = require("express");
const app = express.Router();

const model = require('../models/items.js');

app
    .options('*', (req, res, next) => {   
        res.setHeader('Access-Control-Allow-Origin', '*');   
        res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.status(200).send();
    })
    .get("/tops/search", (req, res, next) => {
        model   .Search("tops", req.query.q)
                .then( x => res.send(x) )
                .catch(next)
    })
    .get("/pants/search", (req, res, next) => {
        model   .Search("pants", req.query.q)
                .then( x => res.send(x) )
                .catch(next)
    })
    .get("/shoes/search", (req, res, next) => {
        model   .Search("shoes", req.query.q)
                .then( x => res.send(x) )
                .catch(next)
    })
    .post("/seed", (req, res, next) => {
        model   .Seed()
                .then( x => res.status(201).send(x) )
                .catch(next)
    })

module.exports = app;