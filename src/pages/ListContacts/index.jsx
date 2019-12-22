import React, { useEffect, useState } from "react";
import api from "../../services/api";

// Componets
import ContactCard from "../../components/ContactCard/ContactCard";

import "./style.scss";

function ListContacts(props) {
  useEffect(() => {
    loadContacts();
  }, []);

  const [contacts, setContacts] = useState([{}]);

  const loadContacts = async () => {
    const response = await api.get("/contact");

    try {
      setContacts(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async id => {
    await api.delete(`/contact/${id}`);

    try {
      loadContacts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="ListContacts">
      <ul>
        {contacts.map((contact, index) => {
          return (
            <ContactCard
              key={index}
              contact={contact}
              deleteAction={handleDelete}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ListContacts;
