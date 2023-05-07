const express = require('express');
const router = express.Router();

const siteController = require('../controllers/siteController');
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');

// user router
router.post('/login', userController.Login);
router.post('/signup', userController.Signup);

// product router
router.get('/product', productController.showProduct);
router.post('/uploadProduct', productController.newProduct);

// Final
router.get('/', siteController.home);

module.exports = router;