const express = require("express");
const path = require("path");

require('dotenv').config();

const usersController = require('./controllers/users.js'); 
const postsController = require('./controllers/posts.js');
const itemsController = require('./controllers/items.js');

const app = express();
const port = process.env.PORT || 3000;  

app

    .use('/', express.static(path.join(__dirname, '../docs')) ) 

    //CORS Light headers; so chrome doesn't shut us down
    .use("*", (req, res, next) => {   
        res.setHeader('Access-Control-Allow-Origin', '*');   
        res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        next();
    })
    
    .use(express.json())

    .use('/posts', postsController)
    .use('/users', usersController)
    .use('/items', itemsController)
    
    .get('*', (req, res) => res.sendFile(path.join(__dirname, '../docs/index.html')))

    .use((err, req, res, next)=>{
        console.error(err);
        res.status(err.code || 500).send(err);
    })

    .listen(port, () => {
        console.log(`App listening at http://localhost:${port}`)
    })