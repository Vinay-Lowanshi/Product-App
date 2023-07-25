const express = require('express');
const router = express.Router();
const admin = require('../Componants/admin.js');
const addproduct = require('../Componants/add_product.js');
const products = require('../Componants/products.js');
const about = require('../Componants/about.js');
const home = require('../Componants/home.js');
const { submit } = require('../Componants/submit.js');
const deleteProduct = require('../models/delete.js');

router.get('/admin', admin);
router.get('/addproduct', addproduct);
router.post('/submit', submit);
router.get('/product', products);
router.get('/about', about);
router.delete('/products/:id', deleteProduct);
router.get('/', home);

module.exports = router;
