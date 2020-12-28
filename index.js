const express = require('express');
const app=express();
app.get('/', (req,res)=>{
    res.status(200).send('Hallo');
});
app.listen(80,()=>{
    console.log('Listen on Port 80');
});

