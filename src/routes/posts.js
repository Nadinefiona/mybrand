import express from 'express';
const router = express.Router();
import Post from '../model/Post';
import{AddPost, DeleteOne, getAllPost, GetOnePost, UpdateOne} from '../controllers/Posts.Controller';

//GET  ALL POSTS
router.get('/', getAllPost);

//SUBMIT POSTS
router.post('/' , AddPost);

//SPECIFIC POSTS
router.get('/:postId' , GetOnePost);
 
 //DELETE POSTS
 router.delete('/:postId' , DeleteOne);

//Update  a post
router.patch('/:postId' , UpdateOne);


export default router;