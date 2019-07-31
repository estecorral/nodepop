'use strict';

const express = require('express');
const router = express.Router();

const Anuncio = require('../../models/Anuncio');

/**
 *  GET /anuncios
 *  Devuelve la lista de anuncios
 */
router.get('/', async (req, res, next) => {
    try {
        const anuncios = await Anuncio.find().exec();
        res.json({ success: true, result: anuncios });
    }catch (e) {
        next(e);
    }
});

/**
 *  GET /anuncios:precio
 *  Obtiene anuncios por rango de precios
 */
router.get('/:precio', async (req, res, next) => {
    try {
        const _precio = req.params.precio;

        const anuncio = await Anuncio.find().exec();

        if (!anuncio) {
            res.status(404).json({ success: false });
            return;
        }

        res.json({ success: true, result: anuncio});
    } catch (e) {
        next(e);
    }

});


/**
 *  GET /anuncios:tags
 *  Obtiene todos los tags de los anuncios
 */


/**
 *  POST /anuncios
 *  Añade un anuncio nuevo
 */
router.post('/', async (req, res, next) => {
   try {
       const data = req.body;

       const anuncio = new Anuncio(data);

       const anuncioGuardado = await anuncio.save();

       res.json({ success: true, result: anuncioGuardado });
   } catch (e) {
       next(e);
   }
});


module.exports = router;