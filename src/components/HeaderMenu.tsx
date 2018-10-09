import * as React from "react";
import { Grid } from "react-flexbox-grid";
import { Alignment, Button, Navbar, NavbarGroup } from "@blueprintjs/core";
import ThemeContext, { Color } from "../theme-context";

export default class HeaderMenu extends React.PureComponent<any, any> {
  public render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <Grid>
            <Navbar>
              <NavbarGroup align={Alignment.LEFT}>
                <Navbar.Heading>Blueprint</Navbar.Heading>
              </NavbarGroup>
              <NavbarGroup align={Alignment.RIGHT}>
                <Button minimal={true} icon="moon" onClick={toggleTheme}>
                  {theme === Color.DARK ? "Dark" : "Light"} mode
                </Button>
              </NavbarGroup>
            </Navbar>
          </Grid>
        )}
      </ThemeContext.Consumer>
    );
  }
}
