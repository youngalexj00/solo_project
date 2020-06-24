import React, {Component} from 'react';

const wrapper = {};
const columnHeaders = {
  'display': 'flex'
};
const tableName = {};
const rows = {
  'display': 'flex',
  'flexDirection': 'column'
}
const rowStyle = {
  'display': 'flex'
}
const box = {
  'width': '200px',
  'border': '1px solid black'
}

class TableDisplay extends Component {
  constructor() {
    super();
    this.state = {};
    this.state.tableName = '';
    this.state.nextIndex = 0;
    this.state.rows = [];
    this.state.columnHeaders = [];
    this.state.displayTableNames = true;
    this.formatTable = this.formatTable.bind(this);
  }

  render() {
    console.log('call to render inside of Table Display')

    console.log('logging state', this.state);
    let array = [(<div><div></div></div>), (<div><div></div></div>)]
    return (
      <div style={wrapper}>
        <div style={tableName}>{this.state.tableName}</div>
        <div style={columnHeaders}>{this.state.columnHeaders}</div>
        <div style={rows}>{this.state.rows}</div>
      </div>
    )
  }

  componentDidMount() {
    console.log('call to component did mount')
    let url = `/api/table/${this.props.tableName}`;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({tableName: this.props.tableName}),
      headers: { 'Content-Type': 'application/json' }
    })
      .then (res => res.json())
      .then (res => {
        console.log('back from fetch request')
        console.log('res is ', res)
        this.formatTable(res);
      })
      .catch((error)=> console.log('error from fetch', error))
  }
  formatTable(table) {
    console.log('call to format table')
    //tableName
    //columnNames
    //rows
      //rowValues
    this.setState({tableName: this.props.tableName});
    this.formatColumnHeaders(table);
    this.formatRowValues(table);
  }
  formatColumnHeaders(table) {
    let columnHeaders = Object.keys(table[0]);
    let columnHeaderElements = []
    columnHeaders.forEach((column, index) => {
      columnHeaderElements.push((<div key ={'columnHeaderKey'+index} style={box} >{column}</div>));
    })
    this.setState({columnHeaders: columnHeaderElements});
  }
  formatRowValues(table) {
    console.log('call to format values')
    let rows = []
    for (let i = 0; i < table.length; i++) {
      let row = Object.values(table[i]);
      let rowElements = [];
      row.forEach((value, index) => {
        rowElements.push((<div key={'rowKeydadv'+index+i} style={box}>{value}</div>));
      })
      rowElements.push(<button>X</button>)
      console.log('row is ', rowElements)
      let newRow = (<div key={'newRowKey'+i} style={rowStyle}>{rowElements}</div>)
      console.log('newRow', newRow)
      rows.push(newRow);
    }
    this.setState({rows: rows});
  }
}

/*

Each row needs a primary key. This will be kept track of manually via the index.

The last row of each table will represents a blank field where the user types in input 
to make a new row in the table. This input is sent with the fetch request.

The end of each row will need a 'send' button rather than a delete button


*/



export default TableDisplay;