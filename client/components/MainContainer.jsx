import React, { Component } from 'react';
import TablesDisplay from './TablesDisplay.jsx'
import TableFinder from './TableFinder.jsx';

class MainContainer extends Component {

  constructor () {
    super();
    this.state = {};
    this.state.tables = [];
    this.state.inputValue = '';
    this.handleInputButton = this.handleInputButton.bind(this);
    this.handleInputFieldChange = this.handleInputFieldChange.bind(this);
    this.addTable = this.addTable.bind(this);
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