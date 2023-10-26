const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) =>  {
    console.log('peticion recibida')
    res.send('HOLA MUNDO con el script DEV y Erwin')
})

const PORT = process.env.PORT

app.listen(PORT, () => {

    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
