import React, { Component } from 'react';
import TableDisplay from './TableDisplay.jsx';


const outerBox = {
  'border': '2px solid black',
  'margin': '10px'
}


class TablesDisplay extends Component {
  constructor() {
    super();
  }
  render() {
    console.log('this.props.tables', this.props.tables)
    let tableElements = []
    this.props.tables.forEach ((ele, index) => {
      tableElements.push((<TableDisplay table={ele} key={'TableDisplayKey'+index}/>))
    })
    if (tableElements.length === 0) tableElements = (<div>Empty</div>)
    return (
      <div style ={outerBox}> 
        {tableElements}
      </div>
     
    )
  }
}

export default TablesDisplay;