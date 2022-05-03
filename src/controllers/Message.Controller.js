import express from 'express';
const router = express.Router();
import Message from '../model/Message';

export const getAllMessages = async (req,res) =>  {
    try {
        const messages = await Post.find();
        res.json(messages);
    } catch (err) {
        res.json({ message: err});
    }
}


export const AddMessage = async (req,res) => {
    const post = new Message({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
 
    try {
        const saveMessage = await post.save()
        res.json(saveMessage);
    } catch (err) {
        res.json({ message: err});
    }
 }


export const DeleteOne = async (req,res) => {
    try {
       const removedMessage = await Post.remove({_id: req.params.Id});
       res.json(removedMessage);
    } catch (err) {
       res.json({ message: err});   
    }
  }




