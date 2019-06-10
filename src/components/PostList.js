import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    componentDidMount(){
        // Call action creator that comes from connect function
        this.props.fetchPosts();
    }
    
    render(){
        return <div>Post List</div>;
    }
}

// Pass action creators to this component
export default connect(null, {
    fetchPosts // fetchPosts: fetchPosts
})(PostList);