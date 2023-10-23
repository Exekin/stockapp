const express = require('express')

const app = express()

app.get('/', (req, res) =>  {
    console.log('peticion recibida')
    res.send('HOLA MUNDO con el script DEV')
})

app.listen(4000,() => {
    console.log('Servidor escuchando en el puerto 4000')
})