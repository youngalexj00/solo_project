import React, { Component } from 'react';
import Cell from './Cell.jsx';

const styleHeader = {
  'display': 'flex'
}

class Header extends Component {
  capitalize(string) {
    let capitalized = string[0].toUpperCase();
    capitalized += string.slice(1)
    return capitalized
  }
  render () {
    console.log('CALL TO : Header render')
    let headers = this.props.headers;
    if (headers === null) return (<div id="no headers"></div>)
    let cells = []
    headers.forEach((header, index) => {
      cells.push((<Cell value={this.capitalize(header)} type='header' key={'headerCellKey'+index}/>))
    })
    cells.unshift((<Cell value='Index' type='header' key={'headerCellIndexKey'}/>));
    // console.log('cells are', cells)
    // console.log('\n')
    return (
      <header style={styleHeader}> 
        {cells}
      </header>
    )
  };
}

export default Header;