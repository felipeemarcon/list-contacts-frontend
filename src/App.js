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

  componentDidMount() {
    this.setInitialTheme();
  }

  setInitialTheme() {
    const htmlEl = document.documentElement;
    htmlEl.setAttribute("data-theme", "light");
  }

  changeTheme() {
    const htmlEl = document.documentElement;

    this.setState({ dark: !this.state.dark }, () => {
      htmlEl.setAttribute("data-theme", this.state.dark ? "dark" : "light");
    });
  }

  render() {
    return (
      <div className="App">
        <Switch theme={this.changeTheme} />
        <Routes />
      </div>
    );
  }
}

export default App;
