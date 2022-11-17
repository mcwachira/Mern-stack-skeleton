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
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
//app.use(bodyParser.json()) //for getting data from our req.body
app.use(morgan('tiny')) //used to log request from the frontend
//get cookies
app.use(cookieParser())
//to compress my respond bodies
app.use(compress())
app.use(helmet())


//import Routes
const userRouter = require('./routes/user.route')
const authRouter = require('./routes/auth.route')

//use routes
app.use('/', userRouter)
app.use('/', authRouter)


//error handling

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ "error": err.name + ": " + err.message })
    } else if (err) {
        res.status(400).json({ "error": err.name + ": " + err.message })
        console.log(err)
    }
})

connectDb()

//use

const port = process.env.PORT || 8000

app.listen(port, (req, res) => {
    console.log(`Server Started on port ${port} `)
})