import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';

const FriendsList = ({ friends }) => (
  <ul className={styles.friendsList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li className={styles.item} key={id}>
        <span
          className={isOnline ? styles.statusOnline : styles.statusOffline}
        ></span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendsList;
