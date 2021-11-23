const express = require("express");
const app = express.Router();

const model = require("../models/posts");

app

    .get("/", (req, res, next) => {
        model   .GetAll()
                .then( x => res.send(x) )
                .catch(next)
    })

    .get("/wall/:handle", (req, res, next) => {
        model   .GetWall(req.params.handle)
                .then( x => res.send(x) )
                .catch(next)
    })

    .get("/feed/:handle", (req, res, next) => {
        model   .GetFeed(req.params.handle)
                .then( x => res.send(x) )
                .catch(next);
    })

    .get("/:id", (req, res, next) => {
        model   .Get(req.params.id)
                .then( x => res.send(x) )
                .catch(next)
    })

    .delete("/:id", (req, res, next) => {
        model   .Delete(req.params.id)
                .then( x => res.send({ deleted: x }) )
                .catch(next)
    })

    .post("/", (req, res, next) => {
        model   .Add(req.body)
                .then( x => res.status(201).send(x) )
                .catch(next)
    })

    .post("/seed", (req, res, next) => {
        model   .Seed()
                .then( x => res.status(201).send(x) )
                .catch(next)
    })

module.exports = app;