// here we utilize the possibilties of mongoose
// CRUD applications are runned here

import mongoose from 'mongoose';

/*schema : with mongodb we can create documents that look 
absolutely different mongoose provides uniformity to our documents */
const postSchema = mongoose.Schema({
    // Properties of a post
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;