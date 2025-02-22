const router = require('express').Router();
const {Create,getProducts}=require('../controllers/userController')


router.post('/post', Create);
router.get('/get', getProducts);


module.exports = router;


