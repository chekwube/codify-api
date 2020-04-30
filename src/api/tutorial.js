const express = require('express')
const router = express.Router()
const Tutorial = require('../services/tutorial')
const sendErrorResponse = require('../middlewares/response').sendErrorResponse;
const sendItemResponse = require('../middlewares/response').sendItemResponse;

router.post('/', async(req, res) => {
    try {
        var tutorialDetails = {
            name: req.body.name,
            category: req.body.category,
            topic: req.body.topic,
            content: req.body.content,
        }

        var item = await Tutorial.add(tutorialDetails)
        sendItemResponse(req, res, item)
    } catch (error) {
        sendErrorResponse(error)
    }
})

router.put('/', async(req, res) => {
    try {
        var tutorialDetails = {
            id: req.body.id,
            name: req.body.name,
            category: req.body.category,
            topic: req.body.topic,
            content: req.body.content,
        }

        var item = await Tutorial.update(tutorialDetails)
        sendItemResponse(req, res, item)
    } catch (error) {
        sendErrorResponse(error)
    }
})

router.get('/', async(req, res) => {
        try {
            var item = await Tutorial.getAll()
            sendItemResponse(req, res, item)
        } catch (error) {
            sendErrorResponse(error)
        }
    })
    .get('/select', async(req, res) => {
        try {
            var item = await Tutorial.getOne(req.query.id)
            sendItemResponse(req, res, item)
        } catch (error) {
            sendErrorResponse(error)
        }
    })
    .get('/group', async(req, res) => {
        try {
            var item = await Tutorial.getGroup(req.query.category)
            sendItemResponse(req, res, item)
        } catch (error) {
            sendErrorResponse(error)
        }
    })
    .get('/categories', async(req, res) => {
        try {
            var item = await Tutorial.getCategories()
            sendItemResponse(req, res, item)
        } catch (error) {
            sendErrorResponse(error)
        }
    })


router.delete('/', async(req, res) => {
    try {
        var item = await Tutorial.delete(req.query.id)
        sendItemResponse(req, res, item)
    } catch (error) {
        sendErrorResponse(error)
    }
})

module.exports = router