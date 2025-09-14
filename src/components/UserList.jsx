import React from "react";
import UserCard from "./Usercard";

function UserList({ users }) {
  return (
    <div className="d-flex flex-column gap-3">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
