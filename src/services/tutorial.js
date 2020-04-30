const tutorial = require('../models/tutorial')

module.exports = {
    getOne: async(id) => {
        try {
            var res = await tutorial.findOne({ _id: id })
            return res
        } catch (error) {
            throw error
        }
    },

    getGroup: async(category) => {
        try {
            var res = await tutorial.find({ category })
            return res
        } catch (error) {
            throw error
        }
    },

    getCategories: async() => {
        try {
            var res = await tutorial.distinct("category")
            return res
        } catch (error) {
            throw error
        }
    },

    getAll: async() => {
        try {
            var res = await tutorial.find({})
            return res
        } catch (error) {
            throw error
        }
    },

    add: async(tutorialDetails) => {
        try {
            var res = await tutorial.create(tutorialDetails)
            return res
        } catch (error) {
            throw error
        }
    },

    update: async(updateDetails) => {
        try {
            var res = await tutorial.updateOne({ _id: updateDetails.id }, { $set: {...updateDetails } })
            return res
        } catch (error) {
            throw error
        }
    },

    delete: async(id) => {
        try {
            var res = await tutorial.deleteOne({ _id: id })
            return res
        } catch (error) {
            throw err
        }
    }
}