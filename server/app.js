const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//write your code 
//http://localhost:3000/user?id=aya
//{"message":"Hello aya"}
app.get('/user',(req,res)=>{
    var user_id = req.param('id');
    res.json({message:"Hello " +user_id});
})

//http://localhost:3000/user

app.post('/user',(req,res)=>{
    const data = {"message":"Hello"};
    const body = req.body;
    const msg = Object.assign(data,body);
    res.json(body);
    //or
    //res.json(msg);
    
})

app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});

