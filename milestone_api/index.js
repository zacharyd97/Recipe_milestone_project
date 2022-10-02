const express = require('express')
const {Sequelize} = require('sequelize')
const cors = require('cors')
const app = express()

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to project api'
    })
})

// CONTROLLERS 
const cuisineController = require('./controllers/cuisine_controller')
app.use('/cuisine', cuisineController)


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`live on port:${process.env.PORT}`)
})