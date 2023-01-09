module.exports={
    getAllcategoryes:(req,res)=>{
        return res.status(200).json({msg:'all producs'});
    },
    getcategoryById:(req,res)=>{
        return res.status(200).json({msg:'category id:' + req.params.id});
    },
    deletecategoryById:(req,res)=>{
        return res.status(200).json({msg:'deleted category id:' + req.params.id});
    },
    UpdatecategoryById:(req,res)=>{
        return res.status(200).json({msg:'updated category id:' + req.params.id});
    },
    addcategoryById:(req,res)=>{
        return res.status(200).json({msg:'added category'});
    }

};