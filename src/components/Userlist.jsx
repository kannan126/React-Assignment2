import React from 'react';
import UserCard from './Usercard';

function UserList({ users }) {
  return (
    <div className="row">
      {users.map(user => (
        <div className="col-12 mb-3" key={user.id}>
          <UserCard user={user} />
        </div>
      ))}
    </div>
  );
}

export default UserList;
