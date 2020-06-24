import React, { Component } from 'react';

const styleCell = {
  'width': '200px',
  'height': '30px',
  'textAlign': 'center',
  'margin-top': '5px'
}

class Cell extends Component {
  render () {
    return (
      <nav style={styleCell}>{this.props.value}</nav>
    )
  };
}


export default Cell;