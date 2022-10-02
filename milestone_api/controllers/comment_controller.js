const comments = require('express').Router()
const db = require('../models')
const { Comment } = db


comments.get('/', async (req, res) => {
    try {
        const foundComment = await Comment.findAll()
        console.log(foundComment)
        res.status(200).json(foundComment)
    } catch (error) {
        res.status(500).json(error)
    }
})
comments.get('/:id', async (req, res) => {
    try {
        const foundComment = await Comment.findOne({
            where: { comment_id: req.params.id }
        })
        console.log(foundComment)
        res.status(200).json(foundComment)
    } catch (error) {
        res.status(500).json(error)
    }
})

comments.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new comment',
            data: newComment
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

comments.put('/:id', async (req, res) => {
    try {
        const updatedComment = await Comment.update(req.body, {
            where: {
                comment_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedComment}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})


comments.delete('/:id', async (req, res) => {
    try {
        const deleteComment = await Comment.destroy({
            where: {
                comment_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deleteComment}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = comments