const router = require('express').Router();
const Product= require('../models/Product');

//read all products
router.get('/', async(req,res)=>{               // shows all products
try {const allproduct= await Product.find();
    res.render('Products/All-products.ejs',{allProduct:allproduct});} 
catch (error) {
    res.send("Error occured",error);}   
});



//creat a new product
router.get('/new', (req, res) => { // form to create a new product
    res.render('Products/add-product.ejs');
}); 
router.post('/', async (req, res) => { // create a new product
    try {
        const newProduct = await Product.create(req.body);
        res.redirect('/product');
    } catch (error) {
        res.send("Error occurred: ", error);}
});





module.exports = router;