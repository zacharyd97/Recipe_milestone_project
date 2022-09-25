const express = require('express')
const router = express.Router()


// INDEX
router.get('/', (req, res) => {
  res.render('home')
  })


module.exports = router

