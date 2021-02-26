import React from 'react';

import Profile from './components/Profile/Profile';
import * as user from './sources/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './sources/statistical-data.json';

import FriendList from './components/Friends/FriendList';
import friends from './sources/friends.json';

import TransactionHistory from './components/Transactions/TransactionHistory';
import transactions from './sources/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      

      <Statistics title="Upload stats" data={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
