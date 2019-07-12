import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
    render() {
        const { user } = this.props;

        if(!user){
            return null;
        }

        return <div className="header">{user.name}</div>;
    }
}

// ownProps is a reference to the props that are about to be sent into this component
// ownProps is used so we don't have to pass a ton of unnecessary data to component above
const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);