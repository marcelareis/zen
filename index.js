//importanto o express e guardando em app
const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
// é o knex passando as configurações do bd

app.db = db

consign()
// chamando a função consign
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api') // todos arquivos serão carregados pelo consign
    //.then('./schedule')
    .then('./config/routes.js') // quando acessar a rota já carregou as apis
    .into(app)
    // injeta o app

app.listen(3000, () => {
    // calback quando fizer o bind imprime 
    console.log('Backend executando...')
}) 