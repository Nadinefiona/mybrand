const express = require('express');

const app = express();

const YAML = require('yamljs');

const dotenv = require('dotenv');

const mongoose = require('mongoose');

const swaggerJsDoc = require('swagger-jsdoc');

const swaggerUi = require('swagger-ui-express');

app.use(express.json());

require('dotenv').config({
  path: 'ENV_FILENAME'
});

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User API',
      description: 'User  API  information',
      contact: {
        name: 'web developer'
      },
      servers: ["http://localhost:300"]
    }
  },
  apis: ["index.js"]
};
const swaggerDos = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDos));
app.get("/user", () => {
  res.status.send("user results");
});
/**

 * @swagger 
 * /api/user/register:
 *   get:
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
 *     description: add new user
 *     responses:
 *       '200':
 *          description: A successful response
 */

/**
 * @swagger
 * /api/user/register/{:userId}:
 *   get:
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
 *     description: login
 *     responses:
 *       '200':
 *          description: A successful response
 */

/**
 * @swagger
 * /api/posts:
 *   post:
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
 *     description: get all posts
 *     responses:
 *       '200':
 *          description: A successful response
 */

/**
 * @swagger
 * /api/posts{:postId}:
 *   post:
 *     description: update  a post
 *     responses:
 *       '200':
 *          description: A successful response
 */

/**
 * @swagger
 * /api/posts{:postId}:
 *   delete:
 *     description: delete post
 *     responses:
 *       '200':
 *          description: A successful response
 */
// Import Routes

const authRoute = require('./routes/auth');

const postRoute = require('./routes/posts');

const res = require('express/lib/response'); // const router = require('./routes/auth');


dotenv.config(); //Connect to DB

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6zhup.mongodb.net/database?retryWrites=true&w=majority`, () => {
  console.log('connected to db!');
}); // mongoose.connect(
// `${process.env.DB_CONNECT}`
// ,() =>{
//   console.log('connected to db!')
// });
//Middlewares

app.use(express.json()); //Route Middlewares

app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
app.listen(300, () => console.log('Server Up and running'));
module.exports = app;