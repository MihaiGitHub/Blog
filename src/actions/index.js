import jsonPlaceholder from '../apis/jsonPlaceholder';

// Because using async await, once it gets transpiled to es15 it is not returning a plain js object!!
// It is returning a request object without the type property so it will error out
// Need to applyMiddleware Redux-Thunk in index.js to solve it
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: response
    });
};