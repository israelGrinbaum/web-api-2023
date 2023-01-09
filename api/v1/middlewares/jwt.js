const jwt=require('jsonwebtoken');
const token=jwt.sign({Uid:23,Email:'israelGr@gmail.com'},'myPrivatKey',{expiresIn:'1h'});
console.log(token);