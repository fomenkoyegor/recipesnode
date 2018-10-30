const Category = require('../models/Category');
const Recipe = require('../models/Recipes');
const errHendler = require('../untils/errHendler');


module.exports.getAll = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        errHendler(res, err);
    }
};

module.exports.getById = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findById(id);
        res.status(200).json(category);
    } catch (err) {
        errHendler(res, err);
    }
};


module.exports.getRecipes = async (req, res) => {
    try {
        const id = req.params.id;
        const recipes = await Recipe.find({'categoryId':id});
        res.status(200).json(recipes);
    } catch (err) {
        errHendler(res, err);
    }
};