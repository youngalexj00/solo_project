import React, { Component } from 'react';
import Cell from './Cell.jsx';

const styleRow = {
  'display': 'flex'
}
const styleButton = {
  'marginTop': '9px',
  'marginLeft': '8px',
  'height': '25px',
  'width': '25px'
}

class Row extends Component {
  render() {
    //console.log('CALL TO : Rows render');
    let row = this.props.row;
    let cells = [];
    row.forEach((ele, index) => {
      cells.push((<Cell value={ele} key={'rowCellKey'+index}/>))
    })
    cells.unshift((<Cell value={this.props.index} key={'rowCellIndex'+this.props.index}/>))
    //console.log('/n')
    return (
      <div style={styleRow} >
        {cells}
        <button id={this.props.index} style={styleButton} onClick ={this.props.deleteRow}>x</button>
      </div>
    )
  };
}

export default Row;