import * as React from "react";

interface IPropsEditableTitle {
  handleBlur: any;
}

export default class EditableTitle extends React.Component<
  IPropsEditableTitle
> {
  render() {
    return (
      <span
        contentEditable={true}
        suppressContentEditableWarning={true}
        onBlur={this.props.handleBlur}
        style={{ cursor: "text" }}
      >
        {this.props.children}
      </span>
    );
  }
}
