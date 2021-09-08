import React from 'react';
import Post from './Post/Post.js';
import useStyles from './styles.js';
import { RootState } from 'react-redux';
//to fetch data from global redux store 
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';


const Posts = ({ setCurrentId }) => {

    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={ classes.container } container alignItems="stretch" spacing={3}>
                { posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;