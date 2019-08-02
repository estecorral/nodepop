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



anuncioSchema.statics.list = function ({filter, limit, start, sort}) {
    const query = Anuncio.find(filter);
    console.log(filter);
    query.limit(limit);
    query.skip(start);
    query.sort(sort);
    return query.exec();
}

// Modelo de anuncio
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;