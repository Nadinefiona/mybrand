import express from 'express';
const app = express();
// import bodyParser from 'body-parser';
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
 * /api/users:
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
 * /api/users:
 *   post:
 *     tags: 
 *        - User
 *     name: users
 *     summary: Add user
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
 * /api/users/{:userId}:
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
 * /api/users/login:
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
 *     summary: Add post
 *     description: add post
 *     produces:
 *      - application/json
 *     consumes:
 *     - application/json
 *     parameters:
 *      - in: path
 *        name: title
 *        required: true 
 *      - in: path
 *        name: description
 *        required: true 
 *      - in: formData
 *        name: file
 *        type: file
 *        required: true
 *        description: file Upload                                                                                  
 *     responses:
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
 *     summary: Get All  Posts
 *     description: get all posts
 *     responses:
 *       '200':
 *          description: A successful response
 */

/**
 * @swagger
 * /api/posts/{:postId}:
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
 */

 /**
 * @swagger
 * /api/posts/{:postId}:
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
 */

/**
 * @swagger
 * /api/posts/{:postId}:
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
 */





/**
 * @swagger
 * /api/posts/{:postId}/comments:
 *   get:
 *     tags:
 *       - Comment
 *     name: posts
 *     summary: Get All  Comments
 *     description: get all Comments
 *     responses:
 *       '200':
 *          description: A successful response
 */
/**
 * @swagger
 * /api/comments/{:postId}:
 *   get:
 *     tags:
 *       - Comment
 *     name: posts
 *     summary: Get one  Comments
 *     description: get one Comments
 *     responses:
 *       '200':
 *          description: A successful response
 */

/**
 * @swagger
 * /api/posts/{:postId}/comments:
 *   post:
 *     tags: 
 *        - Comment
 *     name: comments
 *     summary: Add comment
 *     description: add comment
 *     produces:
 *      - application/json
 *     consumes:
 *     - application/json
 *     parameters:
 *      - in: body
 *        name: comment
 *        required: true
 *        schema: 
 *          type: object
 *          properties:
 *            name: 
 *               type: string
 *            comment:
 *               type: string                                                                                    
 *     responses:
 *       '200':
 *          description: A successful response
 */

 /**
 * @swagger
 * /api/comments/{:postId}:
 *   delete:
 *     tags:
 *         - Comment
 *     name: comments
 *     summary: Delete comment 
 *     description: DELETE a comment 
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
 * /api/messages:
 *   post:
 *     tags: 
 *        - Message
 *     name: messages
 *     summary: Add message
 *     description: add message
 *     produces:
 *      - application/json
 *     consumes:
 *     - application/json
 *     parameters:
 *      - in: body
 *        name: message
 *        required: true
 *        schema: 
 *          type: object
 *          properties:
 *            name: 
 *               type: string
 *            email:
 *               type: string
 *            message:
 *               type: string                                                                                    
 *     responses:
 *       '200':
 *          description: A successful response
 */

/**
 * @swagger
 * /api/messages:
 *   get:
 *     tags: 
 *       - Message
 *     name: message
 *     summary: Get all message
 *     description: get a message
 *     responses:
 *       '200':
 *          description: A successful response
 */
/**
 * @swagger
 * /api/messages:
 *   delete:
 *     tags: 
 *       - Message
 *     name: message
 *     summary: Delete a message
 *     description: delete  a message
 *     responses:
 *       '200':
 *          description: A successful response
 */

/**
 * @swagger
 * /api/posts/{:postId}/likes:
 *   put:
 *     tags: 
 *        - likes
 *     name: likes
 *     summary: Add like
 *     description: add like
 *     produces:
 *      - application/json
 *     consumes:
 *     - application/json
 *     parameters:
 *      - in: path
 *        name: postId
 *        required: true
 *      - in: body
 *        name: comment
 *        required: true
 *        schema: 
 *          type: object
 *          properties:
 *            name: 
 *               type: string
 *            comment:
 *               type: string                                                                                    
 *     responses:
 *       '200':
 *          description: A successful response
 */
/**
 * @swagger
 * /api/posts/{:postId}/likes:
 *   get:
 *     tags: 
 *       - likes
 *     name: likes
 *     summary: Get all likes
 *     description: get a like
 *     parameters:
 *     - in: path
 *       name: postId
 *       required: true
 *     responses:
 *       '200':
 *          description: A successful response
 */

// Import Routes
import authRoute from './src/routes/auth';
import messageRoute from './src/routes/message';
import commentRoute from './src/routes/comment';
import postRoute from './src/routes/posts';
import res from 'express/lib/response';
import bodyParser from 'body-parser';

dotenv.config();



//Connect to DB
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6zhup.mongodb.net/database?retryWrites=true&w=majority`,

() =>{
  console.log('connected to db!')
});


//Middlewares
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//Route Middlewares
app.use('/api/users', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/messages', messageRoute);
app.use('/api/comments', commentRoute);

app.listen(3000, () => console.log('Server Up and running'));


export default app;