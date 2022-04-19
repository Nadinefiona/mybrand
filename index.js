const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


// Extended:https://swagger.io/specification/
const swaggerOptions = {
   swaggerDefinition:{
       info:{
           title:"User API",
           description:"User  API  information",
           contact: {
               name: "web developer"
           },
           servers:["http://localhost:300"]
       }
   },
   apis: ["index.js"]
};

const swaggerDos =  swaggerJsDoc(swaggerOptions);
app.use('/api-dos', swaggerUi.serve, swaggerUi.setup(swaggerDos));

app.get("/users",() => {
   res.status.send("customer results");
});

// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const res = require('express/lib/response');

dotenv.config();



//Connect to DB
mongoose.connect('mongodb+srv://nadine_1:fiona123@cluster0.6zhup.mongodb.net/database?retryWrites=true&w=majority',() =>{
  console.log('connected to db!')
});

//Middlewares
app.use(express.json());


//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(300, () => console.log('Server Up and running'));