import React from 'react';
import Profile from './Profile';
import PropTypes from 'prop-types';

function ProfileList({ items }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.username}>
                    <Profile
                        avatar={item.avatar}
                        username={item.username}
                        tag={item.tag}
                        location={item.location}
                        followers={item.stats.followers}
                        views={item.stats.views}
                        likes={item.stats.likes}
                    />
                </li>
            ))}
        </ul>
    )
}

ProfileList.propTypes = {
    items: PropTypes.array,
}

export default ProfileList;