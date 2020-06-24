import React, {Component} from 'react';
import Header from './Header.jsx';
import Rows from './Rows.jsx'


const styleTableDisplay = {
  'border': '2px solid black',
  'margin': '10px',
  'borderRadius': '3px',
  'width': '900px'
}

class TableDisplay extends Component {
  constructor() {
    super();
    this.state = {};
    this.state.rows = [];
    this.state.columnHeaders = [];
    this.deleteRow = this.deleteRow.bind(this);
  }

  deleteRow(e) {
    console.log('call to delete row')
    console.log(e.target.id)
    let index = e.target.id - 1;
    let newRows = this.state.rows.slice();
    let oldRow = newRows[index]
    newRows.splice(index, 1);
    let primaryValue = oldRow[0];
    let primaryKey = this.state.columnHeaders[0];
    this.setState({rows: newRows})

    let url = `/api/table/:${this.props.tableName}`;
    fetch(url, {
      method: 'DELETE',
      body: JSON.stringify({table: this.props.tableName, primaryKey: primaryKey, primaryValue: primaryValue}),
      headers: { 'Content-Type': 'application/json' }
    })
      .then (console.log("got response for fetch"))
      .catch((error)=> console.log('error from fetch', error))
    e.preventDefault();
  }

  render() {
    return (
      <section style={styleTableDisplay}>
        <h2 style={{'marginLeft': '10px'}}>{this.props.tableName}</h2>
        <Header headers={this.state.columnHeaders}/> 
        <Rows rows={this.state.rows} deleteRow={this.deleteRow} />
      </section>
    )
  }
  componentDidMount() {
    let url = `/api/table/:${this.props.tableName}`;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({table: this.props.tableName}),
      headers: { 'Content-Type': 'application/json' }
    })
      .then (res => res.json())
      .then (res => {
        this.formatTable(res);
      })
      .catch((error)=> console.log('error from fetch', error))
  }
  formatTable(table) {
    this.setState({columnHeaders: Object.keys(table[0])});
    let rows = []
    for (let i = 0; i < table.length; i++) {
      rows.push(Object.values(table[i]));
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