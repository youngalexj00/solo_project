import React, { Component } from 'react';
import Cell from './Cell.jsx';

const styleRow = {
  'display': 'flex'
}

class Row extends Component {
  render() {
    console.log('CALL TO : Rows render');
    let row = this.props.row;
    let cells = [];
    row.forEach((ele, index) => {
      cells.push((<Cell value={ele} key={'rowCellKey'+index}/>))
    })
    console.log('/n')
    return (
      <div style={styleRow} >
        {cells}
      </div>
    )
  };
}

export default Row;