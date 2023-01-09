const mysql=require('mysql');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

module.exports={
    register:(req,res)=>{
        let connection=global.mysqldb;

        const {user,pass,fullNsme}=req.body;

        let sql=`insert into users(user,pass,fullNsme)values('${user}','${pass}','${fullNsme}');`;
        bcrypt.hash(pass,10).then((hashPass)=>{}).catch((err)=>{});
        connection.query(sql,(err,rows,fields)=>{
            if(err){
                return res.status(500).json(err);
            }
            else{
                let uid=rows.insertId;
                let token=jwt.sign({uid:uid},process.env.PRIVAT_KEI);
                return res.status(200).json(uid,token);

            }

        }).catch((err)=>{
            return res.status(500).json(err);
        });
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
    },
    login:(req,res)=>{
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