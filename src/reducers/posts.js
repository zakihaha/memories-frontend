// reducer membutuhkan state dan action
export default (posts = [], action) => {
    switch (action.stype) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...posts, action.payload]
        default:
            return posts
    }
}