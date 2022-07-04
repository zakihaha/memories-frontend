import React from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core'

import useStyle from './styles.js'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getPost } from '../../actions/posts';
import moment from 'moment';

const PostDetails = () => {
    const { post, posts, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyle()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getPost(id))
    },[id])

    if (isLoading) {
        return (
            <Paper elevation={6} className={classes.loadingPaper}>
                <CircularProgress size="7em" />
            </Paper>
        )
    }

    if (!post) return <p>aaa</p>;


    return (
        <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
            <div className={classes.card}>
                <div className={classes.section}>
                    <Typography variant="h3" component="h2">{post.title}</Typography>
                    {/* <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography> */}
                    <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
                    <Divider style={{ margin: '20px 0' }} />
                    <Typography variant="h6">Created by: {post.name}</Typography>
                    <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
                </div>
                <div className={classes.imageSection}>
                    <img className={classes.media} src={post.selectedFile} alt={post.title} />
                </div>
            </div>
            {/* {!!recommendedPosts.length && (
                <div className={classes.section}>
                    <Typography gutterBottom variant="h5">You might also like:</Typography>
                    <Divider />
                    <div className={classes.recommendedPosts}>
                        {recommendedPosts.map(({ title, name, message, likes, selectedFile, _id }) => (
                            <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
                                <Typography gutterBottom variant="h6">{title}</Typography>
                                <Typography gutterBottom variant="subtitle2">{name}</Typography>
                                <Typography gutterBottom variant="subtitle2">{message}</Typography>
                                <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                                <img src={selectedFile} width="200px" />
                            </div>
                        ))}
                    </div>
                </div>
            )} */}
        </Paper>
    );
};

export default PostDetails;