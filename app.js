const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()

app.use(express.static(path.join(__dirname,'public')))

//app.get('/', (req, res) =>  {
    //console.log('peticion recibida')
    //res.status(200).sendFile('index.html',{root:__dirname})
//})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
