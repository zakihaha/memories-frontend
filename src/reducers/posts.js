import * as actionTypes from '../constants/actionTypes';

// reducer membutuhkan state dan action
export default (state = [], action) => {
    switch (action.type) {
        // membuat state baru
        case actionTypes.FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages
            }

        case actionTypes.FETCH_BY_SEARCH:
            return {
                ...state, posts: action.payload
            }

        case actionTypes.CREATE:
            return [...state, action.payload]

        case actionTypes.UPDATE:
        case actionTypes.LIKE:
            // id updated post
            return state.map((post) => post._id === action.payload._id ? action.payload : post)

        case actionTypes.DELETE:
            return state.filter((post) => post._id !== action.payload)

        default:
            return state

    }
}