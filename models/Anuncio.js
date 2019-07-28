'use strict';

const mongoose = require('mongoose');

// definimos un esquema
const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
}, { collection : 'anuncios' });

// Modelo de anuncio
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;