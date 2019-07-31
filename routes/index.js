var express = require('express');
var router = express.Router();

const Anuncio = require('../models/Anuncio');
const { query, validationResult } = require('express-validator');

/* GET home page.*/
router.get('/', async (req, res, next) => {
    try {
        res.locals.anuncios = await Anuncio.find().exec();
        console.log(res.locals.anuncios);
        res.render('index');
    }catch (e) {
        next(e);
    }
});

router.get('/', (req, res, next) => {
    console.log('req.query', req.query);
    res.send('ok');
});
module.exports = router;
