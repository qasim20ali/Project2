const router = require('express').Router();
const Product= require('../models/Product');
const isSignedIn = require('../middleware/is-signed-in');
const isSeller = require('../middleware/is-seller');

//read all products
router.get('/', async(req,res)=>{               // shows all products
try {const allproduct= await Product.find();
    res.render('Products/All-products.ejs',{allProduct:allproduct});} 
catch (error) {
    res.send("Error occured",error);}   
});

// protect all routes below this line
router.use(isSignedIn);

// restrict to sellers only
router.use(isSeller);



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

//delete product route
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id); 
    res.redirect('/product');
  } catch (err) {
    res.status(500).send(err.message);
  } 
});


//update product routes
router.get('/:id/edit', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render('Products/edit-product.ejs', { product });
  } catch (error) {
    res.send("Error occurred: ", error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/product');
  } catch (error) {
    res.send("Error occurred: ", error);
  }
});

module.exports = router;
