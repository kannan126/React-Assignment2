import React, { useEffect, useState } from "react";
import { Row, Col, Spin, message } from "antd";
import UserCard from "./components/Usercard";
import EditUserModal from "./components/EditUserModel";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // add a liked flag to each user
        setUsers(data.map((u) => ({ ...u, liked: false })));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSave = (updatedUser) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === editingUser.id ? { ...u, ...updatedUser } : u
      )
    );
    message.success("User updated successfully!");
  };

  const handleLike = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, liked: !u.liked } : u
      )
    );
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
    message.success("User deleted!");
  };

  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" tip="Loading users..." />
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]}>
        {users.map((user) => (
          <Col xs={24} sm={12} md={8} lg={6} key={user.id}>
            <UserCard
              user={user}
              onEdit={() => setEditingUser(user)}
              onLike={() => handleLike(user.id)}
              onDelete={() => handleDelete(user.id)}
            />
          </Col>
        ))}
      </Row>

      {editingUser && (
        <EditUserModal
          visible={!!editingUser}
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

export default App;
