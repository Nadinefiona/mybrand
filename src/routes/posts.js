import express from 'express';
const router = express.Router();
import Post from '../model/Post';
import authorization from '../Middlewares/Authorization';
import{AddPost, DeleteOne, getAllPost, GetOnePost, UpdateOne} from '../controllers/Posts.Controller';

//GET  ALL POSTS
router.get('/', getAllPost);

//SUBMIT POSTS
router.post('/',authorization , AddPost);

//SPECIFIC POSTS
router.get('/:postId' , GetOnePost);
 
 //DELETE POSTS
 router.delete('/:postId',authorization , DeleteOne);

//Update  a post
router.patch('/:postId',authorization , UpdateOne);


export default router;