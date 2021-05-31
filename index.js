const express = require('express');

const app=express();

app.get('/', (req,res) => {
    res.send('CES Application on PI4B IS [June 1st, 2021]');
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});
