const router=require('express').Router();

const {getAllcategoryes,
    getcategoryById,
    deletecategoryById,
    UpdatecategoryById,
    addcategoryById}=require('../controllers/category');

router.get("/",getAllcategoryes);
router.get("/:id",getcategoryById);
router.delete ("/:id",deletecategoryById);
router.patch("/:id",UpdatecategoryById);
router.post("/",addcategoryById);

module.exports=router