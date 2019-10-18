import React, { Component } from "react";
import { connect } from "react-redux";

import Page from "./layout";

class IAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };

    this.onChageText = this.onChageText.bind(this);
    this.onChangeSelection = this.onChangeSelection.bind(this);
  }

  onChageText(text) {
    this.setState({ text });
  }

  onChangeSelection(text) {}

  render() {
    const { text } = this.state;
    const { suggestions } = this.props;

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

const mapStateToProps = (state) => {
  return {
     suggestions: state.suggestions,
  };
};

export default connect(mapStateToProps)(IAppBar);
