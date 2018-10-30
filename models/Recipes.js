const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    title: {
        type: String, required: true 
    },
    description: {
        type: String, required: true 
    },
    photoUrl: {
        type: String, required: true 
    },
    instructions: {
        type: String, required: true 
    },
    likes: {
        type: Number,
        default: 0 
    },
    categoryId: {
        ref: 'categories',
        type: Schema.Types.ObjectId
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    },
    ingridients:[],
    favorite: { type: Boolean, default: false }
})

module.exports = mongoose.model('recipes', recipeSchema)
