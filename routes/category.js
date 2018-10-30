var express = require('express');
const controller = require('../controllers/category');
var router = express.Router();

router.get('/',controller.getAll);
router.get('/:id',controller.getById);
router.get('/:id/recipes',controller.getRecipes);

module.exports = router;