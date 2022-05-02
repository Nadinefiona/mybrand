import express from 'express';
const router = express.Router();
import Comment from '../model/comment';

export const getAllComments = async (req,res) =>  {
    // try {
    //     const comments = await Post.find();
    //     res.json(comments);
    // } catch (err) {
    //     res.json({ message: err});
    // }
}


export const AddComment = async (req,res) => {
    // const post = new Comment({
    //     name: req.body.name,
    //     comment: req.body.comment
    // });
 
    // try {
    //     const saveComment = await post.save()
    //     res.json(saveComment);
    // } catch (err) {
    //     res.json({ message: err});
    // }
 }


export const DeleteOne = async (req,res) => {
    // try {
    //    const removedComment = await Post.remove({_id: req.params.Id});
    //    res.json(removedComment);
    // } catch (err) {
    //    res.json({ message: err});   
    // }
  }




