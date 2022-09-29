const { Router } = require('express')
const express = require('express')
const router = express.Router()
const db = require("../models")
const { recipe } = db

// INDEX
router.get('/', (req, res) => {
  res.render('show')
})

// router.get('/:id',  (req,res) => {

// });
// router.post('/',  (req, res) => {

// });

// // UPDATE A BAND
// router.put('/:id',  (req, res) => {

// });

// // DELETE A BAND
// router.delete('/:id',  (req, res) => {

// });

module.exports = router

