import React, {Component} from 'react';

const tableNameBox = {
  'border': '2px solid black',
  'margin': '10px'
}

const valuesBox = {
  //'border': '2px solid black',
  'margin': '10px',
  'display': 'flex',
  'flexDirection': 'column',
}

const columnNamesBox = {
  'display': 'flex',
  'fontSize': '17px',
  'margin-bottom': '5px'
}

const columnValuesBox = {
  'display': 'flex',
  'flexDirection': 'column'
}

const columnRow = {
  'display': 'flex',
  'fontSize': '15px'
}

const boxes = {
  'minWidth': '130px',
  'border': '1px solid black',
  'textAlign': 'center'
}

class TableDisplay extends Component {
  render() {
    let table = this.props.table;
    let columnNames = []
    table.columnNames.forEach((name, index) => {
      columnNames.push((<div key={'columnNameKey'+index}style={boxes}>{name}</div>))
    })

    let columnValues = []
    table.values.forEach((row, indexOuter) => {
      let rowElements = [];
      row.forEach((value, indexInner) => {
        rowElements.push(<div style={boxes} key={'columnBox'+indexInner}>{value}</div>)
      })
    columnValues.push(<div style={columnRow} key={'columnRow'+indexOuter}>{rowElements}</div>)
    });

    return (
      <div>
        <div style={tableNameBox}>Table Name: {table.tableName}</div>
        <div style={valuesBox}>
          <div style={columnNamesBox}>{columnNames}</div> 
           <div style={columnValuesBox}>{columnValues}</div>
        </div>
      </div>
    )
  }
}



export default TableDisplay;