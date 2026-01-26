const router = require("express").Router()
const Product = require('../models/Product');

router.get('/', async (req, res) => {
    try {
        const latestProducts = await Product.find().sort({ createdAt: -1 }).limit(3);
        res.render('homepage.ejs', { latestProducts });
    } catch (error) {
        res.send("Error occurred: " + error);
    }
})
module.exports = router;
