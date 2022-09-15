const express = require ('express');
const router = express.Router();
const postsService = require('../service/postsService');
//var Post = require("./Post.js");
//funcionando
router.get('/posts', async function (req, res){
  const posts = await postsService.getPosts();
  res.json(posts);
  res.end;
  
 });
//funcionando
router.delete('/posts/:id', async function (req, res){
  const posts = await postsService.deletePost(req.params.id);
  res.send("Registro deletado.");
  res.end;
});
//funcionando
router.get('/posts/:id', async function (req, res){
  const post = await postsService.getPost(req.params.id);
  res.json(post);
  res.end;  
});

router.post('/posts', async function (req, res){
  const post = req.body;
  const newPost = await postsService.savePost(post);
  res.send("Registro inserido.")
  res.end;
});

router.put('/posts/:id', async function (req, res){
  const post = req.body;
  await postsService.updatePost(req.params.id,post);
  res.send("Alteração realizada.");
  res.end;
 });

module.exports = router;
