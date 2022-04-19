// const router = require('express').Router();

// // const verify = require('./verifyToken');
// // router.get('/',verify, (req,res) =>  {
// router.get('/', (req,res) =>  {
//    res.json({
//        posts: {
//            title: 'my first posts',
//            description: 'rondom data you should not access'
//        }
//    });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Post = require('../model/Post')

//GET  ALL POSTS
router.get('/', async (req,res) =>  {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err});
    }
});

//SUBMIT POSTS
router.post('/' , async (req,res) => {
   const post = new Post({
       title: req.body.title,
       description: req.body.description
   });

   try {
       const savePost = await post.save()
       res.json(savePost);
   } catch (err) {
       res.json({ message: err});
   }
});

//SPECIFIC POSTS
router.get('/:postId' , async (req,res) => {
   try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
   } catch (err) {
    res.json({ message: err});  
   }
 });
 
 //DELETE POSTS
 router.delete('/:postId' , async (req,res) => {
    try {
       const removedPost = await Post.remove({_id: req.params.postId});
       res.json(removedPost);
    } catch (err) {
       res.json({ message: err});   
    }
  });

//Update  a post
router.patch('/:postId' , async (req,res) => {
    try {
       const updatePost = await Post.updateOne(
           {_id: req.params.postId},
           { $set: { title:req.body.title}}
           );
       res.json(updatePost);
    } catch (err) {
       res.json({ message: err});   
    }
  });


module.exports = router;