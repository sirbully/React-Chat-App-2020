import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './UserContainer.css';

const UserContainer = ({ users }) => (
  <div className='textContainer'>
    <div>
      <h1>
        Realtime Chat Application{' '}
        <span role='img' aria-label='emoji'>
          💬
        </span>
      </h1>
      <h2>
        Created by Krizza Bullecer
        <span role='img' aria-label='emoji'>
          ❤️
        </span>
      </h2>
      <h2>Technologies: React, Express, Node and Socket.IO</h2>
    </div>
    {users && (
      <div>
        <h1>People currently chatting:</h1>
        <div className='activeContainer'>
          <h2>
            {users.map(({ name }) => (
              <div key={name} className='activeItem'>
                {name}
                <img src={onlineIcon} alt='Online' />
              </div>
            ))}
          </h2>
        </div>
      </div>
    )}
  </div>
);

export default UserContainer;
