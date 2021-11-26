import React from 'react';
import StatisticList from './components/Statistics/Statisticlist'
import FriedList from './components/Friends/FriendList'
import user from './components/Profile/user.json'
import data from './components/Statistics/data.json'
import friends from './components/Friends/friends.json'
import transactions from './components/Transactions/transactions.json'
import TransactionHistory from './components/Transactions/TransactionHistory'
import Profile from './components/Profile/Profile'

export default function App() {
    return (
        <div>
                <Profile
                    avatar={user.avatar}
                    username={user.username}
                    tag={user.tag}
                    location={user.location}
                    followers={user.followers}
                    views={user.views}
                    likes={user.likes}
                    stats = {user.stats}
                />
            <StatisticList title="Upload stats" items={data} />
            <FriedList  items={friends}/>
            <TransactionHistory items={transactions}/>

        </div>
    );

 
}   
