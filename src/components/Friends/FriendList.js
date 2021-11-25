
import React from 'react';
import Frieds from '../Friends/Friends'
import PropTypes from 'prop-types';


function FriedList ({items}){
return (
    <ul className="friend-list">
{items.map(friend=>(
    <li key={friend.id} className="item">
    <span className="status">{friend.isOnline}</span>
    <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
    <p className="name">{friend.name}</p>
</li>
))}
</ul>
)
}

export default FriedList