import React from 'react';
import ProfileList from './components/Profile/ProfileList'
import StatisticList from './components/Statistics/Statisticlist'
import FriedList from './components/Friends/FriendList'
import user from './components/Profile/user.json'
import data from './components/Statistics/data.json'
import friends from './components/Friends/friends.json'
import transactions from './components/Transactions/transactions.json'

export default function App() {
    return (
        <div>
            <ProfileList items={user} />
              <h2 className="title">Upload stats</h2>
            <StatisticList title="Upload stats" items={data} />
            <h2 className="title">Frieds status</h2>
            <FriedList  items={friends}/>
            <h2 className="title">Transactions</h2>

        </div>
    );
}

