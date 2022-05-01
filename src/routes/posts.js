import express from 'express';
import multer from 'multer';
const router = express.Router();
import Post from '../model/Post';
import authorization from '../Middlewares/Authorization';
import{AddPost, DeleteOne, getAllPost, GetOnePost, UpdateOne} from '../controllers/Posts.Controller';
import{AddComment, getAllComments} from '../controllers/Comment.Controller';
const upload = multer({ dest:'./uploads'})
let image = upload.single('image');


//GET  ALL POSTS
router.get('/', getAllPost);

//SUBMIT POSTS
router.post('/' , image, AddPost);

//GET ALL COMMENTS
router.post('/comments' ,AddComment );

//ADD COMMENT
router.post('/comments' ,getAllComments);

//SPECIFIC POSTS
router.get('/:postId' , GetOnePost);
 
 //DELETE POSTS
 router.delete('/:postId',authorization , DeleteOne);

//Update  a post
router.patch('/:postId',authorization , UpdateOne);


export default router;