
const cuisines = require('express').Router()
const db = require('../models')
const { Cuisine, Recipe } = db


cuisines.get('/', async (req, res) => {
    try {
        const foundCuisine = await Cuisine.findAll()
        console.log(foundCuisine)
        res.status(200).json(foundCuisine)
    } catch (error) {
        res.status(500).json(error)
    }
})
cuisines.get('/:id', async (req, res) => {
    try {
        const foundCuisine = await Cuisine.findOne({
            where: { cuisine_id: req.params.id },
            include: { model: Recipe, as: "recipes" }
        })
        console.log(foundCuisine)
        res.status(200).json(foundCuisine)
    } catch (error) {
        res.status(500).json(error)
    }
})

cuisines.post('/', async (req, res) => {
    try {
        const newCuisine = await Cuisine.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new food',
            data: newCuisine
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

cuisines.put('/:id', async (req, res) => {
    try {
        const updatedCuisine = await Cuisine.update(req.body, {
            where: {
                cuisine_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedCuisine}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})


cuisines.delete('/:id', async (req, res) => {
    try {
        const deleteCuisine = await Cuisine.destroy({
            where: {
                cuisine_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deleteCuisine}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = cuisines