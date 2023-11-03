const express = require('express')
const mongoose = require('mongoose');
const path = require('path')
require('dotenv').config()

mongoose
    .connect(
      `mongodb+srv://exekin:${process.env.MONGO_DB_PASS}@micluster.bbvmrmb.mongodb.net/?retryWrites=true&w=majority`
)
.then((result) => console.log('Conexión exitosa a la Base de datos'))
.catch((err) => console.log('error'))

const app = express()

// app.get('/', (req, res, next) =>  {
//     console.log('peticion recibida')
//     next()
// })

app.use(express.static(path.join(__dirname,'public')))

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
