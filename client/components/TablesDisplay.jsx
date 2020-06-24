import React, { Component } from 'react';
import TableDisplay from './TableDisplay.jsx';



class TablesDisplay extends Component {
  constructor() {
    super();
  }
  render() {
    //let tableElements = [(<TableDisplay tableName={'Animals'} key={'TableDisplaysKeyTemporary'}/>)]
    let tableElements = [];
    this.props.tables.forEach ((table, index) => {
      tableElements.push((<TableDisplay tableName={table} key={'TableDisplaysKey'+index}/>))
    })
    
    if (tableElements.length === 0) tableElements = (<div>No Tables Loaded</div>)
    return (
      <div> 
        {tableElements}
      </div>
    )
  }
}

export default TablesDisplay;