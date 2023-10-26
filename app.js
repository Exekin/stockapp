const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) =>  {
    console.log('peticion recibida')
    res.send('HOLA con el script DEV y Erwin, se modifica el gitignore')
})

const PORT = process.env.PORT

app.listen(PORT, () => {

    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
