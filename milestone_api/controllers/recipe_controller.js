const recipes = require('express').Router()
const db = require('../models')
const { Recipe, Comment, Ingredient } = db


recipes.get('/', async (req, res) => {
    try {
        const foundRecipe = await Recipe.findAll()
        console.log(foundRecipe)
        res.status(200).json(foundRecipe)
    } catch (error) {
        res.status(500).json(error)
    }
})
recipes.get('/:id', async (req, res) => {
    try {
        const foundRecipe = await Recipe.findOne({
            where: { recipe_id: req.params.id },
            include: [
                {
                    model: Comment, as: "comments"
                },
                {
                    model: Ingredient, as: 'ingredients'
                }
            ]
        })
        console.log(foundRecipe)
        res.status(200).json(foundRecipe)
    } catch (error) {
        res.status(500).json(error)
    }
})

recipes.post('/', async (req, res) => {
    try {
        const newRecipe = await Recipe.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new recipe',
            data: newRecipe
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

recipes.put('/:id', async (req, res) => {
    try {
        const updatedRecipe = await Recipe.update(req.body, {
            where: {
                recipe_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedRecipe}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})


recipes.delete('/:id', async (req, res) => {
    try {
        const deleteRecipe = await Recipe.destroy({
            where: {
                recipe_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deleteRecipe}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = recipes
