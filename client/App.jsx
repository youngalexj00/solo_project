import React, {Component} from 'react';
import MainContainer from './components/MainContainer.jsx';
class App extends Component {
  constructor () {
    super();
    this.state = {};
    this.state.table = null;
    this.state.inputValue = '';
    this.getTable = this.getTable.bind(this);
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
        this.formatTable();
      })
      .catch((error)=> console.log('error from fetch', error))
  }
  formatTable () {
    console.log('entering format table', this.state.table)
  }
  handleInputFieldChange(e) {
    this.setState({inputValue: e.target.value});
  }
  render() {
    return (
    <div>
      <MainContainer/>
      <form id='tableForm'>

        <input id='tableInputField' placeholder='new table' 
        type='text' name='tableName' value={this.state.inputValue} 
        onChange={this.handleInputFieldChange}></input>
        
        <button form='tableForm' type='submit' 
        value='Submit'onClick={(e) => {
          console.log('clicked'); 
          this.getTable()
          this.setState({inputValue: ''});
          e.preventDefault();
        }}>Submit</button>
      </form>
    </div>
    )
  }
}

export default App;