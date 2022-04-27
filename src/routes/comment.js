import express from 'express';
const router = express.Router();
import Comment from '../model/comment';
import{AddComment, DeleteOne, getAllComments} from '../controllers/Comment.Controller';

//GET  ALL COMMENTS
router.get('/', getAllComments);

//ADD COMMENT
router.post('/' , AddComment);


 //DELETE COMMENT
 router.delete('/:Id' , DeleteOne);

export default router;