const express = require("express");
const path = require("path");
const cors = require("cors");

require('dotenv').config();

const usersController = require('./controllers/users.js'); 
const postsController = require('./controllers/posts.js');

const app = express();
const port = process.env.PORT || 3000;  

app

    .use('/', express.static(path.join(__dirname, '../docs')) ) 

    .use(cors({
        origin: '*'
    }))

    /*CORS Light headers; so chrome doesn't shut us down
    .use((req, res, next) => {   
        res.setHeader('Access-Control-Allow-Origin', '*');   
        res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        next();
    })
    */

    .use(express.json())

    .use('/posts', postsController)
    .use('/users', usersController)
    
    .get('*', (req, res) => res.sendFile(path.join(__dirname, '../docs/index.html')))

    .use((err, req, res, next)=>{
        console.error(err);
        res.status(err.code || 500).send(err);
    })

    .listen(port, () => {
        console.log(`App listening at http://localhost:${port}`)
    })