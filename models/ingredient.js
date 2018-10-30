const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ingridientSchema = new Schema({
    name:{
        type:String
    },
    recipeId: {
        ref: 'recipes',
        type: Schema.Types.ObjectId
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('ingridients', ingridientSchema)
