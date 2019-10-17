import React, { Component } from "react";
import { connect } from "react-redux";

import Page from "./layout";

class IAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      suggestions
    };

    this.onChageText = this.onChageText.bind(this);
    this.onChangeSelection = this.onChangeSelection.bind(this);
  }

  onChageText(text) {
    this.setState({ text });
  }

  onChangeSelection(text) {}

  render() {
    const { text, suggestions } = this.state;

    return (
      <Page
        text={text}
        suggestions={suggestions}
        onChageText={this.onChageText}
        onChangeSelection={this.onChangeSelection}
      />
    );
  }
}

export default connect()(IAppBar);
