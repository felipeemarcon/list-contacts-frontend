import React from "react";
import { Link } from "react-router-dom";

// Style
import "./style.scss";

// Components
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

export default function Home(props) {
  const handleAddContact = () => {
    props.history.push("/new-contact");
  };

  return (
    <div className="App-HomeContent">
      <Card padding="var(--space-squish-sm)">
        <p>Add a new contact to your list clicking in button bellow.</p>
        <Button action={handleAddContact} label="Add contact" />
      </Card>
      <Link to="/contacts">Show all my contacts</Link>
    </div>
  );
}
