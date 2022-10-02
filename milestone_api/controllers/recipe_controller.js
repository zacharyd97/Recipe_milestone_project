const recipes = require('express').Router()
const db = require('../models')
const { Cuisine } = db


recipes.get('/', async (req, res) => {
    try {
        const foundCuisine = await Cuisine.findAll()
        console.log(foundCuisine)
        res.status(200).json(foundCuisine)
    } catch (error) {
        res.status(500).json(error)
    }
})
recipes.get('/:id', async (req, res) => {
    try {
        const foundCuisine = await Cuisine.findOne({
            where: { cuisine_id: req.params.id }
        })
        console.log(foundCuisine)
        res.status(200).json(foundCuisine)
    } catch (error) {
        res.status(500).json(error)
    }
})

recipes.post('/', async (req, res) => {
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

recipes.put('/:id', async (req, res) => {
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


recipes.delete('/:id', async (req, res) => {
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


module.exports = recipes