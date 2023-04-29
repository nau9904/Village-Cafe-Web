const express = require('express');
const router = express.Router();

const siteController = require('../controllers/siteController');
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const authenticated = require('../middleware/authMiddleware');
const redirectAuth = require('../middleware/redirectIfAuthenticated');

// user router
router.post('/login', redirectAuth, userController.Login);
router.post('/signup', userController.Signup);

// product router
router.get('/product', productController.showProduct);
router.post('/uploadProduct',redirectAuth, productController.newProduct);

// Final
router.get('/', siteController.home);

module.exports = router;