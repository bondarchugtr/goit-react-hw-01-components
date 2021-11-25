import React from 'react';
import ProfileList from './components/Profile/ProfileList'
import StatisticList from './components/Statistics/Statisticlist'
import user from './user.json'
import data from './data.json'

export default function App() {
    return (
        <div>
            <ProfileList items={user} />
              <h2 className="title">Upload stats</h2>
            <StatisticList title="Upload stats" items={data} />
        </div>
    );
}

