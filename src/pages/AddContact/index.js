import React, { useState } from "react";
import Dropzone from "../../components/Dropzone/Dropzone";

// Api
import api from "../../services/api";

// Component
import Content from "../../components/Content/Content";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";

export default function AddContact() {
  const [contact, setContact] = useState({
    name: "",
    cel_phone: "",
    email: "",
    address: ""
  });

  const [avatar, setAvatar] = useState({ avatar: [] });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setContact(prevState => ({ ...prevState, [name]: value }));
  };

  const { name, cel_phone, email, address } = contact;

  const handleCleanInput = () => {
    setContact(prevState => ({
      ...prevState,
      name: "",
      cel_phone: "",
      email: "",
      address: ""
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const { name, cel_phone, email, address } = contact;

    api
      .post("contact", {
        name,
        cel_phone,
        email,
        address
      })
      .then(handleCleanInput)
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <Content>
      <SectionTitle label="Add a new contact" />
      <Form action={handleSubmit}>
        <Input
          value={name}
          name="name"
          actionChange={handleInputChange}
          type="text"
          placeholder="First name and Last name"
        />
        <Input
          value={email}
          name="email"
          actionChange={handleInputChange}
          type="email"
          placeholder="Email address"
        />
        <Input
          value={cel_phone}
          name="cel_phone"
          mask="+55 (99) 99999-9999"
          actionChange={handleInputChange}
          type="text"
          placeholder="Phone number"
        />
        <Input
          value={address}
          name="address"
          actionChange={handleInputChange}
          type="text"
          placeholder="Address"
        />
        <Dropzone />
        <Button type="submit" label="Save contact" />
      </Form>
    </Content>
  );
}
