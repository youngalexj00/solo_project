import React, { Component } from 'react';



class Cell extends Component {
  render () {
    const styleCell = {
      'width': '180px',
      'height': '10px',
      'textAlign': 'center',
      'padding': '15px',
      'border': '1px solid gray',
      'margin': '0px 0px 10px 10px'
    }
    if (this.props.type === 'header') styleCell['fontSize'] = '18px';
    else styleCell['fontSize'] = '13px'
    return (
      <div style={styleCell}>{this.props.value}</div>
    )
  };
}


export default Cell;