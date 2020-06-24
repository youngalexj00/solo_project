import React, { Component } from 'react';
import TablesDisplay from './TablesDisplay.jsx'
import TableFinder from './TableFinder.jsx';

class MainContainer extends Component {

  constructor () {
    super();
    this.state = {};
    this.state.tables = [];
    this.state.inputValue = '';
    this.getTable = this.getTable.bind(this);
    this.formatTable = this.formatTable.bind(this);
    this.handleInputButton = this.handleInputButton.bind(this);
    this.handleInputFieldChange = this.handleInputFieldChange.bind(this);
    this.addTable = this.addTable.bind(this);
  }

  getTable () {
    let url = `/api/table/${this.state.inputValue}`;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({tableName: this.state.inputValue}),
      headers: { 'Content-Type': 'application/json' }
    })
      .then (res => res.json())
      .then (res => {
        this.formatTable(res)
      })
      .catch((error)=> console.log('error from fetch', error))
  }

  formatTable (res) {
    let rows = res;
    let newTable = {};
    newTable.tableName = this.state.inputValue;
    newTable.columnNames = Object.keys(res[0]);
    newTable.values = [];
    for (let i = 0; i < res.length; i++) {
      newTable.values.push(Object.values(res[i]));
    }
    
    let replacementTables = this.state.tables.slice();
    replacementTables.push(newTable);
    this.setState({tables: replacementTables})
  }
  handleInputFieldChange(e) {
    this.setState({inputValue: e.target.value});
  }
  handleInputButton(e) {
    this.addTable();
    e.preventDefault();
  }
  addTable() {
    let newTables = this.state.tables.slice()
    newTables.push(this.state.inputValue)
    this.setState({tables: newTables});
  }
  render() {
    return (
      <div style = {{'maxWidth': '600px'}}>
        Main Container
        <TableFinder handleInputButton={this.handleInputButton} inputValue={this.state.inputValue} handleInputFieldChange={this.handleInputFieldChange} />
        <TablesDisplay tables={this.state.tables}/>
      </div>
    )
  }
}


export default MainContainer;