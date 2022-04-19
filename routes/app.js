const express = require('express');

const   app = express();

//Routes
app.get('/' , (req,res) => {
   res.send();
});

app.get('/' , (req,res) => {
    res.send();
});


app.listen(300, () => console.log('Server Up and running'));