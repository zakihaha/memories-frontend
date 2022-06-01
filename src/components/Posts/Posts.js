import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles'

function Posts({ setCurrentPostId }) {
    // get from reducers
    const { posts } = useSelector((state) => state.posts)
    const classes = useStyles()

    return (
        !posts?.length ?
            <CircularProgress />
            :
            <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
                {posts.map((post, idx) => (
                    <Grid key={idx} item xs={12} sm={12} md={6} lg={3} >
                        <Post post={post} setCurrentPostId={setCurrentPostId} />
                    </Grid>
                ))}
            </Grid >
    );
}

export default Posts;