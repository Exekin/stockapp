const { timeStamp } = require('console')
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

const app = express()

mongoose
    .connect(
      `mongodb+srv://exekin:${process.env.MONGO_DB_PASS}@micluster.bbvmrmb.mongodb.net/stock-app?retryWrites=true&w=majority`
)
.then((result) =>{
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
    console.log('Conexión existosa a la Base de Datos')
})
    .catch((err) => console.log('error'))

// console.log('Hola a todos')

const productsSchema = mongoose.Schema(
    {
    name: { type: String, require: true},
    price: Number,
    },
    { timestamps: true }

)

const Product = mongoose.model('Product', productsSchema)

app.use(express.json())

app.post('/api/v1/products', (req, res) =>  
    {
    const newProduct = new Product(req.body)

    newProduct
    .save()
    .then((result)=>{
      res.status(201).json({ok: true})
    })
    .catch((err) => console.log(err))
})

app.use(express.static(path.join(__dirname,'public')))

const PORT = process.env.PORT


