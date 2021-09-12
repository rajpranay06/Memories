import express  from "express";

import { signin, signup } from '../controllers/user.js';
import router from "./posts.js";

router.post('/signin', signin); // it is a post route cause we are sending data to the backend
router.post('/signup', signup);

export default router;