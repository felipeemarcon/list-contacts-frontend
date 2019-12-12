import React, { Component } from "react";

// Routes
import Routes from "./routes";

// Components
import Content from "./components/Content/Content";
import Card from "./components/Card/Card";
import SwitchTheme from "./components/SwitchTheme/SwitchTheme";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dark: false
    };

    this.setTheme = this.setTheme.bind(this);
  }

  componentDidMount() {
    this.setInitialTheme();
  }

  setInitialTheme() {
    const htmlEl = document.documentElement;
    htmlEl.setAttribute("data-theme", "light");
  }

  setTheme() {
    const htmlEl = document.documentElement;

    this.setState({ dark: !this.state.dark }, () => {
      htmlEl.setAttribute("data-theme", this.state.dark ? "dark" : "light");
    });
  }

  render() {
    return (
      <div className="App">
        <Content>
          <Card padding="10px">
            <div>
              <a href="#">Voltar</a>
              <SwitchTheme theme={this.setTheme} />
            </div>
          </Card>
          <Routes />
        </Content>
      </div>
    );
  }
}

export default App;
