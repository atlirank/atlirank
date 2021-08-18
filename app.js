const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://mongodbuser:nFtpQDhv3ureDes@cluster0.6kphh.mongodb.net/vmst?authSource=admin&replicaSet=atlas-6x8s60-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'


const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log('connected...')
})

app.use(express.json())

const umsoknirRouter = require('./routes/umsoknir')
app.use('/umsoknir', umsoknirRouter )

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'VMST REST API',
            description: "A REST API built with Express and MongoDB. This API provides CRUD for applying to VMST unemployment insurance."
        },
    },
    apis: ["./routes/umsoknir.js"]
}


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.listen(3000, function(){
    console.log('Server starded')
})
