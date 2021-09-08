import express  from "express";

import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';
import { likePost } from "../controllers/posts.js";
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
// patch is used for updating existing documents
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;