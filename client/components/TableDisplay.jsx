import React, {Component} from 'react';


class TableDisplay extends Component {
  render() {
    return (
      <div>
        <div>Table Name: {this.props.table.tableName}</div>
      </div>
    )
  }
}



export default TableDisplay;