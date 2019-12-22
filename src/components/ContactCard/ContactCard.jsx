import React, { useState } from "react";

import { MdDelete, MdEdit } from "react-icons/md";

// Components
import Button from "../Button/Button";

import "./ContactCard.scss";

function ContactCard(props) {
  const { contact, deleteAction } = props;
  const { _id: id, name, email, cel_phone: phone } = contact;

  const [deleteContact, setDeleteContact] = useState(false);

  const handleCancel = () => {
    setDeleteContact(false);
  };

  return (
    <li>
      <div className="ListContacts__avatar"></div>
      <div className="ListContacts__infos">
        <h2>{name}</h2>
        <a href={`mailto:${email}`}>jacob.hayes@gmail.com</a>
        <p>{phone}</p>
      </div>
      <div className="ListContacts__actions">
        <span onClick={() => deleteAction(id)}>
          <MdDelete size={20} color="var(--color-red-100)" />
        </span>
        <span>
          <MdEdit size={20} color="var(--color-warning-100)" />
        </span>
      </div>

      {deleteContact && (
        <div className="ListContacts__delete">
          <p>Are you sure that yout want to delete this contact?</p>
          <div>
            <Button
              action={() => handleCancel()}
              label="Cancel"
              buttonStyle="cancel"
              size="small"
            />
            <Button label="Delete" buttonStyle="danger" size="small" />
          </div>
        </div>
      )}
    </li>
  );
}

export default ContactCard;
