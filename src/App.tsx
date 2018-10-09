import * as React from "react";
import Routes from "./routes";
import ThemeContext, { Color } from "./theme-context";
// import "./App.css";
// import "./scss/bootstrap.css";

class App extends React.Component<{}, { theme: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      theme: Color.LIGHT
    };
  }
  toggleTheme = () => {
    const theme = this.state.theme === Color.DARK ? Color.LIGHT : Color.DARK;
    document.body.classList.remove(`bp3-${this.state.theme.toLowerCase()}`);
    document.body.classList.add(`bp3-${theme.toLowerCase()}`);
    this.setState({
      theme
    });
  };
  public render() {
    return (
      <ThemeContext.Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
      >
        <Routes />
      </ThemeContext.Provider>
    );
  }
}

export default App;
