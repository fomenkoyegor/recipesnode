const express = require('express');
const controller = require('../controllers/recipe');
const router = express.Router();
const passport = require('passport');

router.get('/',passport.authenticate('jwt',{session:false}), controller.getAll);
router.get('/favorite',passport.authenticate('jwt',{session:false}), controller.getFav);
router.get('/:id',passport.authenticate('jwt',{session:false}), controller.getById);
router.post('/:id/ingridient',passport.authenticate('jwt',{session:false}), controller.createIgridient);
router.patch('/:id/ingridient/:ing',passport.authenticate('jwt',{session:false}), controller.updateIgridient);
router.delete('/:id/ingridient/:ing',passport.authenticate('jwt',{session:false}), controller.deleteIgridient);
router.post('/',passport.authenticate('jwt',{session:false}), controller.create);
router.patch('/:id',passport.authenticate('jwt',{session:false}), controller.update);

module.exports = router;
