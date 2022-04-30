import express from 'express';
const app = express();
import YAML from 'yamljs';
import dotenv from'dotenv';
import mongoose from'mongoose';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
app.use(express.json());
require('dotenv').config({ path: 'ENV_FILENAME' });
const PORT = process.env.PORT || 3000



const swaggerOptions = {
   definition:{
       info:{
           title:'Portfolio API',
           version: '1.0.0',
           description:'Portfolio API  information',
           contact: {
               email: 'nadinefiona9@gmail.com'
           },
        servers:["http://localhost:3000"]
       },
       schemes: ["http"]
   },
   apis: ["index.js"]
};

const swaggerDos =  swaggerJsDoc(swaggerOptions);
app.use('', swaggerUi.serve, swaggerUi.setup(swaggerDos));

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
 *        - User
 *     name: users
 *     summary: add user
 *     description: add new user
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
 *            name: 
 *               type: string
 *            email:
 *               type: string
 *            password:
 *               type: string                                                                                    
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
 *     summary: login
 *     description: login
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
 *            name: 
 *               type: string
 *            email:
 *               type: string
 *            password:
 *               type: string                                                                                    
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
 *         - Post
 *     name: posts
 *     summary: Get post by id
 *     description: GET a post by Id
 *     produces:
 *      - application/json
 *     consumes:
 *     - application/json
 *     parameters:
 *      - name: postId
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
 * /api/posts{:postId}:
 *   delete:
 *     tags:
 *         - Post
 *     name: posts
 *     summary: Delete post 
 *     description: DELETE a post 
 *     produces:
 *      - application/json
 *     consumes:
 *     - application/json
 *     parameters:
 *      - name: postId
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
 * /api/posts{:postId}:
 *   patch:
 *     tags:
 *         - Post
 *     name: posts
 *     summary: update post by id
 *     description: update a post by Id
 *     produces:
 *      - application/json
 *     consumes:
 *     - application/json
 *     parameters:
 *      - name: postId
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
 * /api/comments{:Id}:
 *   delete:
 *     tags: 
 *       - Comment
 *     name: comment
 *     description: delete  a  comment
 *     responses:
 *       '200':
 *          description: A successful response
 */

/**
 * @swagger
 * /api/comments:
 *   get:
 *     tags: 
 *       - Comment
 *     name: comment
 *     description: get all comments
 *     responses:
 *       '200':
 *          description: A successful response
 */



/**
 * @swagger
 * /api/comments:
 *   put:
 *     tags: 
 *       - Comment
 *     name: comment
 *     description: add  a comment
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
 * /api/messages{:Id}:
 *   post:
 *     tags: 
 *       - Message
 *     name: message
 *     description: post a message
 *     responses:
 *       '200':
 *          description: A successful response
 */



/**
 * @swagger
 * /api/messages{:Id}:
 *   delete:
 *     tags: 
 *       - Message
 *     name: message
 *     description: delete  a message
 *     responses:
 *       '200':
 *          description: A successful response
 */

// Import Routes
import authRoute from './routes/auth';
import messageRoute from './routes/message';
import commentRoute from './routes/comment';
import postRoute from './routes/posts';
import res from 'express/lib/response';

dotenv.config();



//Connect to DB
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6zhup.mongodb.net/database?retryWrites=true&w=majority`,

() =>{
  console.log('connected to db!')
});


//Middlewares
app.use(express.json());


//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/messages', messageRoute);
app.use('/api/comments', commentRoute);

app.listen(3000, () => console.log('Server Up and running'));


export default app;