const express = require('express');
const app = express();
const YAML = require('yamljs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
app.use(express.json());
require('dotenv').config({ path: 'ENV_FILENAME' });



const swaggerOptions = {
   definition:{
       info:{
           title:'Portfolio API',
           version: '1.0.0',
           description:'Portfolio API  information',
           contact: {
               email: 'nadinefiona9@gmail.com'
           },
        servers:["http://localhost:300"]
       },
       schemes: ["http"]
   },
   apis: ["index.js"]
};

const swaggerDos =  swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDos));

app.get("/user",() => {
   res.status.send("user results");
});

/**
 * @swagger 
 * /api/user/register:
 *   get:
 *     tags: 
 *       - User
 *     name: users
 *     summary: Get all  users
 *     description: Use to request all users
 *     responses:
 *       '200':
 *          description: A successful response
 */

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     tags:
 *       - User
 *     name: users
 *     description: add new user
 *     responses:
 *       '200':
 *          description: A successful response
 */

/**
 * @swagger
 * /api/user/register/{:userId}:
 *   get:
 *     tags:
 *         - User
 *     name: users
 *     summary: Get user by id
 *     description: GET a user by Id
 *     produces:
 *      - application/json
 *     consumes:
 *     - application/json
 *     parameters:
 *      - name: userId
 *        in: path
 *        required: true
 *        schema: 
 *          type: string
 *     responses:
 *       '200':
 *          description: A successful response
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: object
 *              name:
 *                type: string
 */

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     tags:
 *        - User
 *     name: users
 *     description: login
 *     responses:
 *       '200':
 *          description: A successful response
 */

/**
 * @swagger
 * /api/posts:
 *   post:
 *     tags: 
 *        - Post
 *     name: posts
 *     summary: add post
 *     description: add post
 *     produces:
 *      - application/json
 *     consumes:
 *     - application/json
 *     parameters:
 *      - in: body
 *        name: post
 *        required: true
 *        schema: 
 *          type: object
 *          properties:
 *            title: 
 *               type: string
 *            description:
 *               type: string                                                                                    
 *     responses:
 *       '200':
 *          description: A successful response
 */

/**
 *    /upload:
 *      post:
 *    consumes:
 *      - multipart/formData
 *    parameters:
 *      - in: formData
 *        name: file
 *        type: file
 *        required: true
 *        description: file Upload  
 *    responses:
 *       '200':
 *          description: A successful response  
 */

/**
 * @swagger
 * /api/posts:
 *   get:
 *     tags:
 *       - Post
 *     name: posts
 *     description: get all posts
 *     responses:
 *       '200':
 *          description: A successful response
 */


/**
 * @swagger
 * /api/posts{:postId}:
 *   get:
 *     tags: 
 *       - Post
 *     name: posts
 *     description: update  a post
 *     responses:
 *       '200':
 *          description: A successful response
 */
/**
 * @swagger
 * /api/posts{:postId}:
 *   delete:
 *     tags:
 *       - Post
 *     name: posts
 *     description: delete post
 *     responses:
 *       '200':
 *          description: A successful response
 */

/**
 * @swagger
 * /api/posts{:postId}:
 *   patch:
 *     tags:
 *       - Post
 *     name: posts
 *     description: delete post
 *     responses:
 *       '200':
 *          description: A successful response
 */
/**
 * @swagger
 * /api/posts{Id}:
 *   delete:
 *     tags: 
 *       - Comment
 *     name: comment
 *     description: update  a post
 *     responses:
 *       '200':
 *          description: A successful response
 */

/**
 * @swagger
 * /api/posts{Id}:
 *   get:
 *     tags: 
 *       - Comment
 *     name: comment
 *     description: update  a post
 *     responses:
 *       '200':
 *          description: A successful response
 */



/**
 * @swagger
 * /api/posts:
 *   put:
 *     tags: 
 *       - Comment
 *     name: comment
 *     description: update  a post
 *     responses:
 *       '200':
 *          description: A successful response
 */


/**
 * @swagger
 * /api/posts{:postId}:
 *   put:
 *     tags: 
 *       - Articles
 *     name: articles
 *     description: update  a post
 *     responses:
 *       '200':
 *          description: A successful response
 */


/**
 * @swagger
 * /api/posts{:id}:
 *   get:
 *     tags: 
 *       - Articles
 *     name: articles
 *     description: update  a post
 *     responses:
 *       '200':
 *          description: A successful response
 */
/**
 * @swagger
 * /api/posts{:id}:
 *   delete:
 *     tags: 
 *       - Articles
 *     name: articles
 *     description: update  a post
 *     responses:
 *       '200':
 *          description: A successful response
 */


/**
 * @swagger
 * /api/posts{:Id}:
 *   post:
 *     tags: 
 *       - Message
 *     name: message
 *     description: update  a post
 *     responses:
 *       '200':
 *          description: A successful response
 */



/**
 * @swagger
 * /api/posts:
 *   delete:
 *     tags: 
 *       - Message
 *     name: message
 *     description: update  a post
 *     responses:
 *       '200':
 *          description: A successful response
 */

// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const res = require('express/lib/response');
// const router = require('./routes/auth');

dotenv.config();



//Connect to DB


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6zhup.mongodb.net/database?retryWrites=true&w=majority`,() =>{
  console.log('connected to db!')
});



// mongoose.connect(
// `${process.env.DB_CONNECT}`
// ,() =>{
//   console.log('connected to db!')
// });




//Middlewares
app.use(express.json());


//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(300, () => console.log('Server Up and running'));


module.exports = app;