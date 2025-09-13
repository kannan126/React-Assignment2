import React from "react";

function UserCard({ user }) {
  const placeholderAvatar = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

  return (
    <div className="card shadow-sm p-3 d-flex flex-row align-items-center">
      <div className="avatar me-3">
        <img
          src={placeholderAvatar}
          alt={user.name}
          className="img-fluid"
          style={{ width: "230px", height: "230px" }}
        />
        <div className="text-center mt-1 text-danger" style={{ fontSize: "12px" }}>
        </div>
      </div>
      <div className="user-details">
        <h4>{user.name}</h4>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
      </div>
    </div>
  );
}

export default UserCard;
