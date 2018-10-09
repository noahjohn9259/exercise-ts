import * as React from "react";
import HeaderMenu from "../../components/HeaderMenu";
import { Grid } from "react-flexbox-grid";
import { H1, H2, H3, H4, H5, H6 } from "@blueprintjs/core";

export interface IProps {}

export default class Home extends React.Component<IProps, any> {
  public render() {
    return (
      <div>
        <HeaderMenu />
        <Grid className="pt-5">
          <H1>Heading 1</H1>
          <H2>Heading 2</H2>
          <H3>Heading 3</H3>
          <H4>Heading 4</H4>
          <H5>Heading 5</H5>
          <H6>Heading 6</H6>
        </Grid>
      </div>
    );
  }
}
