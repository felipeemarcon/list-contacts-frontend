import React from "react";

import { MdDelete, MdEdit } from "react-icons/md";

import "./ContactCard.scss";

function ContactCard(props) {
  const { contact } = props;
  const { name, email, cel_phone: phone } = contact;

  return (
    <li>
      <div className="ListContacts__avatar"></div>
      <div className="ListContacts__infos">
        <h2>{name}</h2>
        <a href={`mailto:${email}`}>jacob.hayes@gmail.com</a>
        <p>{phone}</p>
      </div>
      <div className="ListContacts__actions">
        <span>
          <MdDelete size={20} color="var(--color-red-100)" />
        </span>
        <span>
          <MdEdit size={20} color="var(--color-warning-100)" />
        </span>
      </div>
    </li>
  );
}

export default ContactCard;
