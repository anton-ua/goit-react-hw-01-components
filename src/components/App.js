import React from 'react';
import styles from './App.module.css';
import UserProfile from './User';
import user from '../data/user.json';
import Statistics from '../components/Statistics';
import statisticalData from '../data/statistical-data.json';
import FriendsList from './Friends';
import friends from '../data/friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from '../data/transactions.json';

const App = (
  <div className={styles.container}>
    <UserProfile
      imgUrl={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendsList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </div>
);

export default App;
