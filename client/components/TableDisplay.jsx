import React, { Component } from 'react';

class TableDisplay extends Component {
  constructor() {
    super();
  }
  render() {
    let renderedTable = 'undefined';
    if (this.props.table === null) renderedTable = 'empty';
    else renderedTable = this.props.table[1].animal;
    return (
      <div>
         <div>Table Display</div>
        <div>{renderedTable}</div>
      </div>
    )
  }
}

export default TableDisplay;