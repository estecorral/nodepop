# README API PRACTICA NODE

## Iniciar aplicación modo develop:
* npm run dev

## Iniciar la aplicación en modo normal o producción
* npm run prod

## Iniciar base de datos de mongoDB
* ./bin/mongod --dbpath ./data/db --directoryperdb

## Inicializar la base de datos (limpiar bd y cargar anuncios.json con datos de anuncios)
* npm run initDB

## API Métodos

### Lista de todos los anuncios
http://localhost:3000/apiv1/anuncios