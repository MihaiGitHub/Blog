import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// Because using async await, once it gets transpiled to es15 it is not returning a plain js object!!
// It is returning a request object without the type property so it will error out
// Need to applyMiddleware Redux-Thunk in index.js to solve it
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

// A function that returns a function that calls _fetchUser
export const fetchUser = (id) => dispatch => {
    _fetchUser(id, dispatch);
};

// Create private function for memoize
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
});