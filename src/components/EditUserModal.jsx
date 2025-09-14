import React, { useEffect } from "react";
import { Modal, Form, Input } from "antd";

function EditUserModal({ visible, user, onClose, onSave }) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(user);
  }, [user, form]);

  const handleSave = () => {
    form.validateFields().then((values) => {
      onSave(values);
      onClose();
    });
  };

  return (
    <Modal
      open={visible}
      title="Edit User"
      onCancel={onClose}
      onOk={handleSave}
      okText="Save"
    >
      <Form form={form} layout="vertical">
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Phone">
          <Input />
        </Form.Item>
        <Form.Item name="website" label="Website">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default EditUserModal;