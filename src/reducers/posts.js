// reducer membutuhkan state dan action
export default (posts = [], action) => {
    switch (action.type) {
        // membuat state baru
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...posts, action.payload]
        case 'UPDATE':
                                                    // id updated post
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload)
        default:
            return posts
    }
}