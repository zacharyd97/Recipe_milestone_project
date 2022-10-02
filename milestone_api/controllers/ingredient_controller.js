const ingredients = require('express').Router()
const db = require('../models')
const { Ingredient } = db


ingredients.get('/', async (req, res) => {
    try {
        const foundIngredient = await Ingredient.findAll()
        console.log(foundIngredient)
        res.status(200).json(foundIngredient)
    } catch (error) {
        res.status(500).json(error)
    }
})
ingredients.get('/:id', async (req, res) => {
    try {
        const foundIngredient = await Ingredient.findOne({
            where: { ingredient_id: req.params.id }
        })
        console.log(foundIngredient)
        res.status(200).json(foundIngredient)
    } catch (error) {
        res.status(500).json(error)
    }
})

ingredients.post('/', async (req, res) => {
    try {
        const newIngredient = await Ingredient.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new food',
            data: newIngredient
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

ingredients.put('/:id', async (req, res) => {
    try {
        const updatedIngredient = await Ingredient.update(req.body, {
            where: {
                ingredient_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedIngredient}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})


ingredients.delete('/:id', async (req, res) => {
    try {
        const deleteIngredient = await Ingredient.destroy({
            where: {
                ingredient_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deleteIngredient}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = ingredients