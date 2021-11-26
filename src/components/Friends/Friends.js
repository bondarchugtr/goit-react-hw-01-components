import React from 'react';
import PropTypes from 'prop-types';

export default function Friend(props) {
    const {isOnline,avatar,name}=props
    return (
        <>
                <span className="status">{isOnline}</span>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
           
        </>
    )
}


Friend.propTypes = {
    isOnline: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}