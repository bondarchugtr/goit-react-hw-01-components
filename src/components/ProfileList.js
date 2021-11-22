import React from 'react';
import Profile from './profile';

function ProfileList({ items }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.username}>
                    <Profile
                        avatar={item.avatar}
                        username={item.username}
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

export default ProfileList;