const mysql=require('mysql');
const connection=mysql.createConnection({
    host:process.env.MYSQLHOST,
    user:process.env.MYSQLUSER,
    password:process.env.MYSQLPASS,
    database:process.env.MYSQLDB
});
global.mysqldb=connection;
const cors=require('cors');
const express=require('express');
const productRouter=require('./api/v1/routes/product');
const userRouter=require('./api/v1/routes/user');
const categoryRouter=require('./api/v1/routes/category');
const morgan=require('morgan');

const app=express();


connection.connect(function(err){
    if(err)
        console.log('error' + err.message);
    else
        console.log('connect to database');
});


app.use(morgan('dev'));
// app.use('/product',(req,res)=>{req.body.name});
app.use(cors({
    origin:'https://www.zap.co.il'
}));

app.use('/product',productRouter);

app.use('/user',userRouter);

app.use('/category',categoryRouter);

app.all("*",(req,res)=>{
    return res.status(404).json({msg:' 404 page not found'})
})

module.exports=app;