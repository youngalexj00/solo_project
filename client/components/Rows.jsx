import React, { Component } from 'react';
import Row from './Row.jsx'

const styleRows = {
  'display': 'flex',
  'flexDirection': 'column'
}

class Rows extends Component {
  render() {
    console.log('CALL TO : Rows render');
    let rows = this.props.rows;
    if (rows === []) return (<div id='no rows'></div>)
    let rowsElements = [];
    rows.forEach((row, index) => {
      rowsElements.push((<Row row={row} index={index + 1} deleteRow={this.props.deleteRow} key={'rowsRowKey'+index}/>))
    })
    return (
      <div style={styleRows} >
        {rowsElements}
      </div>
    )
  };
}

export default Rows;
