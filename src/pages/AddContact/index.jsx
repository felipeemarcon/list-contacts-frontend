import React, { useState, useMemo } from "react";

import { MdDelete, MdCameraAlt } from "react-icons/md";

// Api
import api from "../../services/api";

// Components
import Content from "../../components/Content/Content";
import Card from "../../components/Card/Card";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";

import "./style.scss";

export default function AddContact() {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });

  const [avatar, setAvatar] = useState(null);

  const preview = useMemo(() => {
    return avatar ? URL.createObjectURL(avatar) : null;
  }, [avatar]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setContact(prevState => ({ ...prevState, [name]: value }));
  };

  const { name, phone: cel_phone, email, address } = contact;

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
    <Content margin="0">
      <Card padding="var(--space-squish-sm)">
        <SectionTitle label="Add a new contact" />
        <Form action={handleSubmit}>
          <div className="Form-thumbnailContainer">
            <label
              htmlFor="selectAvatar"
              id="thumbnail"
              className={`Form-thumbnail ${
                preview ? "Form-thumbnail--has-thumbnail" : ""
              }`}
              style={{ backgroundImage: `url(${preview})` }}
            >
              <MdCameraAlt size={32} color="var(--color-grey-200)" />
              <span>Click here to select a contact photo.</span>
              <input
                type="file"
                name="file"
                id="selectAvatar"
                onChange={event => setAvatar(event.target.files[0])}
              />
            </label>
            {preview && (
              <div
                role="button"
                className="Form-thumbnail__delete"
                onClick={() => setAvatar(null)}
              >
                <MdDelete size={24} color="var(--color-grey-300)" />
              </div>
            )}
          </div>
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
          <Button type="submit" label="Save contact" />
        </Form>
      </Card>
    </Content>
  );
}
