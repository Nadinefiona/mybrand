import express from 'express';
import multer from 'multer';
const router = express.Router();
const upload = multer({dest: '/uploads/'});
import Post from '../model/Post';
import authorization from '../Middlewares/Authorization';
import{AddPost, DeleteOne, getAllPost, GetOnePost, UpdateOne} from '../controllers/Posts.Controller';

//GET  ALL POSTS
router.get('/', getAllPost);

//SUBMIT POSTS
router.post('/',upload.single('postImage') , AddPost);

//SPECIFIC POSTS
router.get('/:postId' , GetOnePost);
 
 //DELETE POSTS
 router.delete('/:postId',authorization , DeleteOne);

//Update  a post
router.patch('/:postId',authorization , UpdateOne);


export default router;