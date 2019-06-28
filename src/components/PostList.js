import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    componentDidMount(){
        // Call action creator that comes from connect function
        this.props.fetchPosts();
    }
    
    render(){
        console.log(this.props.posts)
        
        return <div>Post List</div>;
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
}

// Pass action creators to this component
export default connect(mapStateToProps, {
    fetchPosts // fetchPosts: fetchPosts
})(PostList);