import express from "express";
import router from "./routes/index.js"
import db from "./config/db.js"
import dotenv from 'dotenv'

dotenv.config({ path: './src/variables.env' });

const app = express()

/**
 * Connection to Data Base
 */
db.authenticate()
    .then(() => console.log('Successful connection'))
    .catch(error => console.log(error))


/**
 * PORT and HOST Defined
 */
const port = process.env.PORT || 3000 // process.env.PORT still doesn't exist, HEROKU will add it
const host = process.env.HOST || '0.0.0.0' // 0.0.0.0 it's an invalid host and HEROKU will add a valid HOST

/**
 * Enable PUG
 */
app.set('view engine', 'pug')

/**
 * Get the actual year for the footer
 */
app.use( (req, res, next) => {
    const year = new Date()
    res.locals.actualYear = year.getFullYear()
    res.locals.pageName = 'Agencia de Viajes'
    next()
})

/**
 * Add body parser to read the user data
 */
app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))
app.use('/viajes', express.static('public'));

/**
 * Add router
 * 
 * app.use allow us add the router to our app
 * '/' means to add the router from the home page
 */
app.use('/', router)

app.listen(port, host, () => {

    console.log(`Server running on port ${port}`);
})
