const express = require ('express')
const  cookieParser  = require  ('cookie-parser')
const compress = require ('compression')
const cors = require ('cors')
const helmet = require ('helmet')
const morgan = require('morgan')
require('dotenv/config')
const connectDb = require('./config/db')
const app = express()



//middleware
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
//app.use(bodyParser.json()) //for getting data from our req.body
app.use(morgan('tiny')) //used to log request from the frontend

//get cookies
app.use(cookieParser())
//to compress my respond bodies
app.use(compress())

app.use(helmet())

connectDb()
const port = process.env.PORT || 8000

app.listen(port, (req, res) => {
    console.log(`Server Started on port ${port} `)
})