const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//write your code 
app.get('/user',(req,res)=>{
    var user_id = req.param('id');
    res.json({message:"Hello " +user_id});
})


// app.post('/user',(req,res)=>{
//     var user_id = req.param('id');
//     res.json({"message":"hello", "name":user_id});
// })

app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});

