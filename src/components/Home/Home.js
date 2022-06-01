import React, { useEffect, useState } from 'react';
import { Container, Grid, Grow, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { getPosts, getPostsBySearch } from '../../actions/posts'
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import PaginationComp from '../PaginationComp';
import ChipInput from 'material-ui-chip-input'
import useStyles from './styles'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const Home = () => {
    const [currentPostId, setCurrentPostId] = useState(0)
    const [search, setSearch] = useState('')
    const [tags, setTags] = useState([])

    const dispatch = useDispatch()
    const query = useQuery()
    const navigate = useNavigate()
    const page = query.get('page') || 1
    const searchQuery = query.get('searchQuery')

    const classes = useStyles()

    const handleKeypress = (e) => {
        if (e.keyCode === 13) {
            // search post
        }
    }

    const handleAdd = (tag) => setTags([...tags, tag])

    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete))

    const searchPost = () => {
        if (search.trim() || tags) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') })) // tags array to string
            navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
        } else {
            navigate(`/`)
        }
    }

    return (
        <Grow in>
            <Container maxWidth='xl'>
                <Grid container className={classes.gridContainer} justifyContent='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentPostId={setCurrentPostId} />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <AppBar className={classes.appBarSearch} position='static' color='inherit'>
                            <TextField
                                name='search'
                                variant='outlined'
                                label='Search Memories'
                                fullWidth
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onKeyPress={handleKeypress}
                            />
                            <ChipInput
                                style={{ margin: '10px 0' }}
                                value={tags}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                                label='Search tags'
                                variant='outlined'
                            />
                            <Button onClick={searchPost} className={classes.searchButton} variant='contained' color='primary'>Search</Button>
                        </AppBar>
                        <Form currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
                        <Paper elevation={6} >
                            <PaginationComp page={page} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;