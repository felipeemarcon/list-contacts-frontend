import React, { Component } from "react";

// Routes
import Routes from "./routes";

// Components
import Switch from "./components/Switch/Switch";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dark: false
    };

    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme() {
    this.setState({ dark: !this.state.dark });
  }

  render() {
    return (
      <div
        className={`theme ${
          this.state.dark ? "theme--dark" : "theme--default"
        }`}
      >
        <div className="App">
          <Switch theme={this.changeTheme} />
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
