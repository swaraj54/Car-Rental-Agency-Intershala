const express = require('express');

const router = express.Router();

const addproductController = require('../Controllers/AddProduct-Cont.js')

router.get("/", addproductController.getAllProduct);
router.post("/", addproductController.addcartProduct);



module.exports = router; 