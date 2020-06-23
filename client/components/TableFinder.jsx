import React, { Component } from 'react';

class TableFinder extends Component {
  render() {
    return (
      <div>
        Table Finder
        <form id='tableForm'>
          <input id='tableInputField' placeholder='new table' 
            type='text' name='tableName' value={this.props.inputValue} 
            onChange={this.props.handleInputFieldChange}>
          </input>
          <button form='tableForm' type='submit' 
            value='Submit'onClick={this.props.handleInputButton}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default TableFinder;