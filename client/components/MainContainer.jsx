import React, { Component } from 'react';
import TableDisplay from './TableDisplay.jsx'
import TableFinder from './TableFinder.jsx';
class MainContainer extends Component {

  constructor () {
    super();
    this.state = {};
    this.state.table = null;
    this.state.inputValue = '';
    this.getTable = this.getTable.bind(this);
    this.formatTable = this.formatTable.bind(this);
    this.handleInputButton = this.handleInputButton.bind(this);
    this.handleInputFieldChange = this.handleInputFieldChange.bind(this);
    console.log('constructed app')
  }

  getTable () {
    console.log('inside getTable')
    console.log(this.state.inputValue)
    let url = `/api/table/${this.state.inputValue}`;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({tableName: this.state.inputValue}),
      headers: { 'Content-Type': 'application/json' }
    })
      .then (res => res.json())
      .then (res => {
        console.log('res is', res)
        this.setState({table: res});
      })
      .catch((error)=> console.log('error from fetch', error))
  }

  formatTable () {
    console.log('entering format table', this.state.table)
  }
  handleInputFieldChange(e) {
    this.setState({inputValue: e.target.value});
  }
  handleInputButton(e) {
    console.log('call to input button')
    this.getTable();
    e.preventDefault();
  }
  render() {
    return (
      <div>
        Main Container
        <TableFinder handleInputButton={this.handleInputButton} inputValue={this.state.inputValue} handleInputFieldChange={this.handleInputFieldChange} />
        <TableDisplay table={this.state.table}/>
      </div>
    )
  }
}


export default MainContainer;