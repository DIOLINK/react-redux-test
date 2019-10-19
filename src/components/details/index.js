import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import findCurrentItem from '../../redux/actions/findCurrentItems';

import Page from "./layout";

class Details extends Component {
  componentDidMount() {
    
    this.props.findCurrentItem(parseInt(this.props.match.params.itemId));
    console.log(parseInt(this.props.match.params.itemId));
    
  }

  render() {
    const { currentItems } = this.props;
    
    return (
          <Page
          currentItems={currentItems}
              goTo={(path)=>{this.props.history.push(path)}}
          />
      ); 
  }
}

const mapStateToProps = (state) => {
   return {
    currentItems: state.currentItems,
   };
};

// const warpper = connect(mapStateToProps);
// const component = warpper(details);

const mapDispatchToProps = {
  findCurrentItem,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Details));
