const express = require('express');
const app=express();
const port=process.env.PORT || 80;

app.get('/', (req,res)=>{
    res.status(200).send('Hallo');
});


app.get('/hallo', (req,res)=>{
    res.send('Velo :-) ?');
});

app.listen(port,()=>{
    console.log('Listen on Port 80');
});

