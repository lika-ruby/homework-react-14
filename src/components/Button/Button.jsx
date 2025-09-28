import { Component } from "react";
import { ButtonS } from "./Button";

export class Button extends Component {
  render() {
    return (
      <ButtonS type="button" onClick={this.props.addPage}>
        Load more
      </ButtonS>
    );
  }
}
