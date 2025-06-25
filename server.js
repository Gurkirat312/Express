const express = require('express');
const app = express();

app.use(function(req , res , next){
    console.log(req);
    next();
})

app.get("/" , function(req , res){
    res.send("Hello from server");
})

app.get("/profile" , function(req , res){
    res.send("Hello from profile");
})

app.get("/profile/:username" , function(req , res){
    res.send(`Hello from ${req.params.username}`);
})

app.listen(3000);