import express from 'express';
const router = express.Router();
import Message from '../model/Message';
import{ AddMessage, DeleteOne, getAllMessages } from '../controllers/Message.Controller';

//GET  ALL COMMENTS
router.get('/', getAllMessages);

//ADD COMMENT
router.post('/' , AddMessage);


 //DELETE COMMENT
 router.delete('/:Id' ,DeleteOne );

export default router;