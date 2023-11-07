const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

const app = express()

mongoose
    .connect(
      `mongodb+srv://exekin:${process.env.MONGO_DB_PASS}@micluster.bbvmrmb.mongodb.net/?retryWrites=true&w=majority`
)
.then((result) =>{
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
    console.log('Conexión existosa a la Base de Datos')
})
.catch((err) => console.log('error'))

// console.log('Hola a todos')

app.use(express.json())

app.post('/api/v1/products', (req, res) =>  {
    console.log('peticion recibida')
    console.log({body: req.body});
    res.status(201).json({ok: true})
})

app.use(express.static(path.join(__dirname,'public')))

const PORT = process.env.PORT


