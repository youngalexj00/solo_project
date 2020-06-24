import React, {Component} from 'react';
import Header from './Header.jsx';
import Rows from './Rows.jsx'
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
    this.state.columnHeadersElements = [];
    this.deleteRow = this.deleteRow.bind(this);
  }

  deleteRow(e) {
    console.log('call to deleteRow');
    console.log('e.target.id', e.target.id);
    
    //grab primary key -> assume that the first column is the primary key
    //grab table name
    //update state to remove row from rows
    let index = e.target.id;
    let rows = this.state.rows.slice();
    console.log('rows', rows)
    let row = rows.filter((ele, arrayIndex, array) =>  {console.log(ele); return index === ele.props.children[0];});
    console.log('row', row)
    let primaryKey = row.props.children[1].props.children;
    //console.log('rows before', rows) 
    rows.splice(index, 1);
    //console.log('rows after', rows)
    this.setState({rows: rows});
    e.preventDefault();
  }
  render() {
    return (
      <section>
        <Header headers={this.state.columnHeaders}/> 
        <Rows rows={this.state.rows}/>
      </section>
    )
  }
  componentDidMount() {
    let url = `/api/table/:${this.props.tableName}`;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({tableName: this.props.tableName}),
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