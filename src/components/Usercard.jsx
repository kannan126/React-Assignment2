import React from "react";
import { Card, Avatar, Button } from "antd";
import {
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HomeOutlined,
  BankOutlined,
  HeartOutlined,
  HeartFilled,
  DeleteOutlined,
} from "@ant-design/icons";

function UserCard({ user, onEdit, onLike, onDelete }) {
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

  return (
    <Card
      hoverable
      cover={<Avatar src={avatarUrl} size={250} style={{ margin: "20px auto" }} />}
      actions={[
        user.liked ? (
          <Button
            type="text"
            icon={<HeartFilled style={{ color: "red" }} />}
            onClick={onLike}
          >
            Liked
          </Button>
        ) : (
          <Button
            type="text"
            icon={<HeartOutlined />}
            onClick={onLike}
          >
            Like
          </Button>
        ),
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={onEdit}
        >
          Edit
        </Button>,
        <Button
          danger
          type="text"
          icon={<DeleteOutlined />}
          onClick={onDelete}
        >
          Delete
        </Button>,
      ]}
    >
      <h3>{user.name}</h3>
      <p><MailOutlined /> {user.email}</p>
      <p><PhoneOutlined /> {user.phone}</p>
      <p><GlobalOutlined /> {user.website}</p>
      <p><HomeOutlined /> {user.address.street}, {user.address.city}</p>
      <p><BankOutlined /> {user.company.name}</p>
    </Card>
  );
}

export default UserCard;
