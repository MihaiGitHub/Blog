import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // When calling an action creator from inside another action creator we need to dispatch
    // the result of that action creator
    await dispatch(fetchPosts());

    // Can use getState().posts and get all the posts from redux store

    // Lodash has own version of .map with some nice extra features
    // Return an array with just the unique user ids
    const userIds = _.uniq(_.map(getState().posts, 'userId'));


    // Iterate over user id array and call fetchUser action creator
    userIds.forEach(id => dispatch(fetchUser(id))); // Update redux store with user
};

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

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
};

/*
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
*/