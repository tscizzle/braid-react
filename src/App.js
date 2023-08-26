import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  USERS,
  FRIENDSHIPS,
  CONVOS,
  MESSAGES,
  STRANDS,
} from './test_data';

import './App.scss';


class App extends Component {
  render() {
    return (
      <div class="app">
        <div class="banner">
        </div>
        <div class="middle">
          <QueueArea
            messages={MESSAGES}
            strands={STRANDS}
          />
          <MessageArea
            messages={MESSAGES}
            strands={STRANDS}
            users={USERS}
          />
          <FriendshipArea
            friendships={FRIENDSHIPS}
            users={USERS}
            messages={MESSAGES}
          />
        </div>
        <div class="footer">
        </div>
      </div>
    );
  }
}

export default App;


const QueueArea = ({ messages, strands }) => {
  return (
    <div>
      Queue
    </div>
  )
}

QueueArea.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  strands: PropTypes.arrayOf(PropTypes.object),
}


const MessageArea = ({ messages, strands, users }) => {
  return (
    <div>
      Messages
    </div>
  )
}

MessageArea.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  strands: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object),
}


const FriendshipArea = ({ friendships, users, messages }) => {
  const friendshipsList = _.map(friendships, friendship => (
    <Friendship friendship={friendship} />
  ));
  return (
    <div>
      {friendshipsList}
    </div>
  )
}

FriendshipArea.propTypes = {
  friendships: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object),
  messages: PropTypes.arrayOf(PropTypes.object),
}


const Friendship = ({ friendship }) => {
  return (
    <div>
      Dave
    </div>
  )
}

Friendship.propTypes = {
  friendship: PropTypes.object,
}
