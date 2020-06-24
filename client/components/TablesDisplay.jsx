import React, { Component } from 'react';
import TableDisplay from './TableDisplay.jsx';

const outerBox = {
  'border': '2px solid black',
  'margin': '10px',
  'borderRadius': '3px',
  'width': '900px'
}

class TablesDisplay extends Component {
  constructor() {
    super();
  }
  render() {
    let tableElements = [(<TableDisplay tableName={'songs'} key={'TableDisplaysKeyTemporary'}/>)]
    this.props.tables.forEach ((table, index) => {
      tableElements.push((<TableDisplay tableName={table} key={'TableDisplaysKey'+index}/>))
    })
    if (tableElements.length === 0) tableElements = (<div>No Tables Loaded</div>)
    return (
      <div style ={outerBox}> 
        {tableElements}
      </div>
    )
  }
}

export default TablesDisplay;