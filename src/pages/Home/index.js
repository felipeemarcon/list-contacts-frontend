import React from "react";

// Style
import "./index.scss";

// Components
import Content from "../../components/Content/Content";
import Button from "../../components/Button/Button";

// import { Container } from './styles';

export default function Home(props) {
  const handleAddContact = () => {
    props.history.push("/new-contact");
  };

  return (
    <div className="App-HomeContent">
      <Content>
        <p>Add a new contact to your list clicking in button bellow.</p>
        <Button action={handleAddContact} label="Add contact" />
      </Content>
    </div>
  );
}
