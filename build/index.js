"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _yamljs = _interopRequireDefault(require("yamljs"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _auth = _interopRequireDefault(require("./routes/auth"));

var _message = _interopRequireDefault(require("./routes/message"));

var _comment = _interopRequireDefault(require("./routes/comment"));

var _posts = _interopRequireDefault(require("./routes/posts"));

var _response = _interopRequireDefault(require("express/lib/response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());

require('dotenv').config({
  path: 'ENV_FILENAME'
});

var PORT = process.env.PORT || 3000;
var swaggerOptions = {
  definition: {
    info: {
      title: 'Portfolio API',
      version: '1.0.0',
      description: 'Portfolio API  information',
      contact: {
        email: 'nadinefiona9@gmail.com'
      },
      servers: ["http://localhost:3000"]
    },
    schemes: ["http"]
  },
  apis: ["index.js"]
};
var swaggerDos = (0, _swaggerJsdoc["default"])(swaggerOptions);
app.use('/api-docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(swaggerDos));
app.get("/user", function () {
  _response["default"].status.send("user results");
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

_dotenv["default"].config(); //Connect to DB


_mongoose["default"].connect("mongodb+srv://".concat(process.env.DB_USER, ":").concat(process.env.DB_PASSWORD, "@cluster0.6zhup.mongodb.net/database?retryWrites=true&w=majority"), function () {
  console.log('connected to db!');
}); //Middlewares


app.use(_express["default"].json()); //Route Middlewares

app.use('/api/user', _auth["default"]);
app.use('/api/posts', _posts["default"]);
app.use('/api/messages', _message["default"]);
app.use('/api/comments', _comment["default"]);
app.listen(3000, function () {
  return console.log('Server Up and running');
});
var _default = app;
exports["default"] = _default;