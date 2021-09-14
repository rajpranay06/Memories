// here we utilize the possibilties of mongoose
// CRUD applications are runned here

import mongoose from 'mongoose';

/*schema : with mongodb we can create documents that look 
absolutely different mongoose provides uniformity to our documents */
const postSchema = mongoose.Schema({
    // Properties of a post
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: { type: [String], default: [] },
    comments: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;