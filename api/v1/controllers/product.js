let connection=mysqldb;
module.exports={
    getAllProducts:(req,res)=>{
        let sql='select * from products';
        connection.query(sql,function(err,rows,fields){
            if(err){
                console.log(err);
            }
            else{
                console.log(rows);
                return res.status(200).json(rows);
            }
        });
    },
    getProductById:(req,res)=>{
        let sql='select * from products where pid=' + req.params.id;
        connection.query(sql,function(err,rows,fields){
            if(err){
                console.log(err);
            }
            else{
                console.log(rows);
                return res.status(200).json(rows);
            }
        });
    },
    deleteProductById:(req,res)=>{
        return res.status(200).json({msg:'deleted product id:' + req.params.id});
    },
    UpdateProductById:(req,res)=>{
        return res.status(200).json({msg:'updated product id:' + req.params.id});
    },
    addProductById:(req,res)=>{
        console.log('hi');

        // const {pname,price,pdesc,picname}=req.body;

        // let sql=`INSERT INTO products(pname,price,pdesc,picname)VALUES("${pname}","${price}","${pdesc}","${picname}");`
        // connection.query(sql,function(err,rows,fields){
        //     if(err){
        //         console.log(err);
        //     }
        //     else{
        //         console.log(rows);
        //         return res.status(200).json(rows);
            // }
        // });
    }

};