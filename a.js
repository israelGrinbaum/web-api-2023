const bcrypt=require('bcrypt');
const pass='abc123';
const saltRounds=10;
bcrypt.hash(pass,saltRounds,(err,hashPass)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log(hashPass);
    }
});


//$2b$10$7mdPGtTPE40N0fbbwJO4te2HE8EppyAmkizgTSh2HYr7NGpXq5IVG