const router=require('express').Router();

const {getAllProducts,
    getProductById,
    deleteProductById,
    UpdateProductById,
    addProductById}=require('../controllers/product');

router.get("/",getAllProducts);
router.get("/:id",getProductById);
router.delete ("/:id",deleteProductById);
router.patch("/:id",UpdateProductById);
router.post("/",addProductById);

module.exports=router