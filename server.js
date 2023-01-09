require('dotenv').config();
const http=require('http');
const app=require('./app');
const server=http.createServer(app);
const port=5555;
server.listen(port,()=>{console.log('server started')});
