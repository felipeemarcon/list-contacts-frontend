import React from "react";

// Component
import Content from "../../components/Content/Content";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";

export default function AddContact() {
  const handleSubmit = event => {
    event.preventDefault();

    console.log("Send Form");
  };

  return (
    <Content>
      <SectionTitle label="Add a new contact" />
      <Form action={handleSubmit}>
        <Input type="text" placeholder="First name and Last name" />
        <Input type="email" placeholder="Email address" />
        <Input type="phone" placeholder="Phone number" />
        <Input type="text" placeholder="Address" />
        <Button label="Save contact" />
      </Form>
    </Content>
  );
}
