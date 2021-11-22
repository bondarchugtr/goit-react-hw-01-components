import React from 'react';
import Painting from './components/painting';
import user from './user.json'

export default function App() {
    return (
        <div>
            <Painting
                avatar={user.avatar}
                username={user.username}
                location={user.location}
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
            />
        </div>
    );
}

