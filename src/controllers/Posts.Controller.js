import express from 'express';
import Joi from'@hapi/joi';
import bcrypt from'bcryptjs/dist/bcrypt';
const router = express.Router();
import Post from '../model/Post';


export const getAllPost = async (req,res) =>  {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err});
    }
}


export const AddPost = async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        image: req.file.path
    });
 
    try {
        const savePost = await post.save()
        res.json(savePost);
    } catch (err) {
        res.json({ message: err});
    }
 }


export const GetOnePost = async (req,res) => {
    try {
     const post = await Post.findById(req.params.postId);
     res.json(post);
    } catch (err) {
     res.json({ message: err});  
    }
  }


export const UpdateOne = async (req,res) => {
    try {
       const updatePost = await Post.updateOne(
           {_id: req.params.postId},
           { $set: { title:req.body.title}}
           );
       res.json(updatePost);
    } catch (err) {
       res.json({ message: err});   
    }
  }



export const DeleteOne = async (req,res) => {
    try {
       const removedPost = await Post.remove({_id: req.params.postId});
       res.json(removedPost);
    } catch (err) {
       res.json({ message: err});   
    }
  }




//   "test": "mocha --require @babel/polyfill --require @babel/register --recursive --exit ./test/ --timeout 400000",