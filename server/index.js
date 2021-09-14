import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

//We are setting the body parser so that they can properly send our request 
app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));

app.use(cors()); //This makes every post to route to /posts path like localhost/5000/posts

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 5000;

//we use mongoose to connect to the databse
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))  //If the application is successfull
    .catch((error) => console.log(error.message));                                       //If the application is failed generate the error

mongoose.set(`useFindAndModify`, false);  //It ensures we dont get any warnings in the console