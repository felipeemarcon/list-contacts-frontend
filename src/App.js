import React, { Component } from "react";

// Routes
import Routes from "./routes";
import history from "./utils/history";

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
      currentTheme: this.chekeTheme,
      prevPath: ""
    };
  }

  componentDidMount() {
    this.setInitialTheme();
  }

  componentDidUpdate(nextProps) {
    console.log(this.props.location);
    if (nextProps.location !== this.props.location) {
      this.setState({ prevPath: this.props.location }, () =>
        console.log(this.state.prevPath)
      );
    }
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

  handleGoBackRoute(event) {
    event.preventDefault();

    history.goBack();
  }

  render() {
    return (
      <div className="App">
        <Content>
          <Card padding="10px">
            <div>
              <a href="#" onClick={this.handleGoBackRoute}>
                Voltar
              </a>
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
