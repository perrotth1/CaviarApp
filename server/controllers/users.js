const express = require("express");
const app = express.Router();

const model = require("../models/users");

app

    .get("/", (req, res, next) => {
        model   .GetAll()
                .then( users => res.send(users) )
                .catch(next)
    })

    .get("/:user_id", (req, res, next) => {
        model   .Get(req.params.user_id)
                .then( user => res.send(user) )
                .catch(next)
    })

    .get("/byhandle/:handle", (req, res, next) => {
        model   .GetByHandle(req.params.handle)
                .then( user => res.send(user) )
                .catch(next)
    })

    .patch("/:user_id", (req, res, next) => {
        model   .Update(req.params.user_id, req.body)
                .then( user => res.send(user) )
                .catch(next)
    })

    .delete("/:user_id", (req, res, next) => {
        model   .Delete(req.params.user_id)
                .then( user => res.send({ deleted: user }) )
                .catch(next)
    })

    .post("/register", (req, res, next) => {
        model   .AddUser(req.body)
                .then( user => {
                    res.status(201).send(user);
                })
                .catch(next)
    })

    .post("/login", (req, res, next) => {
        model   .Login(req.body.handle, req.body.password)
                .then(user => {
                    console.log("Returned from model");
                    res.send(user);
                })
                .catch(next)
    })

    .post("/seed", (req, res, next) => {
        model.Seed()
            .then(user => {
                res.status(201).send("Created");
            })
            .catch(next)
    })
    
module.exports = app;
