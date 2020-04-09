import React from 'react';
import styles from './App.module.css';
import UserProfile from '../User/User';
import user from '../../data/user.json';
import Statistics from '../Statistics/Statistics';
import statisticalData from '../../data/statistical-data.json';
import FriendsList from '../Friends/Friends';
import friends from '../../data/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../data/transactions.json';

const App = (
  <div className={styles.container}>
    <UserProfile {...user} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendsList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </div>
);

export default App;
