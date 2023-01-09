const bcrypt=require('bcrypt');
const pass='abc123';
const hashFromDb='$2b$10$7mdPGtTPE40N0fbbwJO4te2HE8EppyAmkizgTSh2HYr7NGpXq5IVG';
bcrypt.compare(pass,hashFromDb,(err,status)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log(status);
    }
});