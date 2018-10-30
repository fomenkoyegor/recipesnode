const Recipe = require('../models/Recipes');
const Ingredient = require('../models/ingredient');
const errHendler = require('../untils/errHendler');


module.exports.getAll = async (req, res) => {
    try {
        var recipes = await Recipe.find({'user': req.user.id});
        res.status(200).json(recipes);
    } catch (err) {
        errHendler(res, err);
    }
};

module.exports.getFav = async (req, res) => {
    try {
        const recipes = await Recipe.find({'user': req.user.id, 'favorite': true});
        res.status(200).json(recipes);
    } catch (err) {
        errHendler(res, err);
    }
};

module.exports.getById = async (req, res) => {
    try {
        const id = req.params.id;
        const recipe = await Recipe.findById(id);
        const ings = await Ingredient.find({'recipeId': id});
        recipe.ingridients = (ings);
        res.status(200).json(recipe);
    } catch (err) {
        errHendler(res, err);
    }
};


module.exports.create = async (req, res) => {
    try {
        const recipe = new Recipe({
            description: req.body.description,
            title: req.body.title,
            photoUrl: req.body.photoUrl,
            instructions: req.body.instructions,
            categoryId: req.body.categoryId,
            user: req.user.id
        });
        await recipe.save();
        res.status(201).json(recipe);
    } catch (err) {
        errHendler(res, err);
    }
};


module.exports.update = async (req, res) => {
    try {

        const id = req.params.id;
        const user = req.user.id;

        const recipe = await Recipe.findByIdAndUpdate(
            {_id: id},
            {$set: req.body},
            {new: true}
        )
        res.status(201).json(recipe);
    } catch (err) {
        errHendler(res, err);
    }
};


module.exports.createIgridient = async (req, res) => {
    try {
        const recipe_id = req.params.id;
        const ingridient = new Ingredient({
            recipeId: recipe_id,
            name: req.body.name,
            user: req.user.id
        })
        await ingridient.save();
        res.status(201).json(ingridient);
    } catch (err) {
        errHendler(res, err);
    }
}

module.exports.updateIgridient = async (req, res) => {
    try {
        const recipe_id = req.params.id;
        const id = req.params.ing;

        const ingridient = await Ingredient.findByIdAndUpdate(
            {_id: id},
            {$set: req.body},
            {new: true}
        )
        await ingridient.save();
        res.status(201).json(ingridient);
    } catch (err) {
        errHendler(res, err);
    }
}

module.exports.deleteIgridient = async (req, res) => {
    try {
        const recipe_id = req.params.id;
        const ingridient_id = req.params.ing;
        await Ingredient.remove({_id: ingridient_id});
        res.status(200).json({message: 'category removed'});
    } catch (err) {
        errHendler(res, err);
    }
}