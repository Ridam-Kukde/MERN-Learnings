
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// CRUD routes
router.post('/', userController.createItem);
router.get('/', userController.getAllItems);
router.get('/:id', userController.getItemById);
router.put('/:id', userController.updateItem);
router.delete('/:id', userController.deleteItem);

module.exports = router;
