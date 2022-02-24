'use strict';
const express = require('express');
const Handler = require('./handler.js');
const router = express.Router();
const base62 = require('base62/lib/ascii');

router.get('/', (req, res) => {
    return new Promise((resolve, reject) => {
        try {
            res.send({ homepage : true });
        } catch(error) {
            res.send({ error : error });
        }
    });
});

router.get('/:url', (req, res) => {
    return new Promise((resolve, reject) => {
        try {
            Handler.getData('URLS/' + base62.decode(req.params.url))
                .then((url) => { res.send({ url : url })});
        } catch(error) {
            res.send({ error : error });
        }
    });
});

router.post('/new', (req, res) => {
    return new Promise((resolve, reject) => {
        try {
            Handler.getData('URLS')
                .then( (data) => { Handler.addUrl(data.length, req.body.url)
                    .then( (result) => { res.send(result) }); 
                });
                
        } catch(error) {
            res.send({ error : error });
        }
    });
});

module.exports = {
    routes: router
}
