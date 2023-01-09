const jwt=require('jsonwebtoken');
const token=jwt.sign({Uid:23,Email:'israelGr@gmail.com'},'myPrivatKey',{expiresIn:'1h'});
console.log(token);

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVaWQiOjIzLCJFbWFpbCI6ImlzcmFlbEdyQGdtYWlsLmNvbSIsImlhdCI6MTY3MjY5MDkxMSwiZXhwIjoxNjcyNjk0NTExfQ.M-xXHmvY9opR6FtNr7LYCw-W3BkcArt33tmUq982I2w