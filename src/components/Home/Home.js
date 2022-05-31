import React, { useEffect, useState } from 'react';
import { Container, Grid, Grow } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts'
import Form from '../Form/Form';
import Posts from '../Posts/Posts';

const Home = () => {
    const [currentPostId, setCurrentPostId] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        // run the action
        dispatch(getPosts())
    }, [currentPostId, dispatch])

    return (
        <Grow in>
            <Container>
                <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentPostId={setCurrentPostId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;