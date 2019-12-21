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

    this.storagedTheme = localStorage.getItem("@lmc/theme");
    this.chekeTheme = this.storagedTheme ? this.storagedTheme : "light";
    this.setTheme = this.setTheme.bind(this);

    this.state = {
      currentTheme: this.chekeTheme
    };
  }

  componentDidMount() {
    this.setInitialTheme();
  }

  setInitialTheme() {
    const htmlEl = document.documentElement;

    htmlEl.setAttribute("data-theme", this.chekeTheme);

    return this.chekeTheme;
  }

  setTheme() {
    const htmlEl = document.documentElement;

    this.setState(
      { currentTheme: this.state.currentTheme === "light" ? "dark" : "light" },
      () => {
        htmlEl.setAttribute("data-theme", this.state.currentTheme);
        localStorage.setItem("@lmc/theme", this.state.currentTheme);
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Content>
          <Card padding="10px">
            <div>
              <a href="#">Voltar</a>
              <SwitchTheme
                theme={this.setTheme}
                initialTheme={this.setInitialTheme()}
              />
            </div>
          </Card>
          <Routes />
        </Content>
      </div>
    );
  }
}

export default App;
