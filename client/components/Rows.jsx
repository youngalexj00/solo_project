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
    let rowsElements = [];
    rows.forEach((row, index) => {
      rowsElements.push((<Row row={row} key={'rowsRowKey'+index}/>))
    })
    console.log('/n')
    return (
      <div style={styleRows} >
        {rowsElements}
      </div>
    )
  };
}

export default Rows;
