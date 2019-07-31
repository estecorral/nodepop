'use strict';

const conn = require('./lib/connectMongoose');

const Anuncio = require('./models/Anuncio');

const datos = require('./data/anuncios.json');

conn.once('open', async () => {
    await Anuncio.deleteMany();
    await Anuncio.insertMany(datos.anuncios);
});
