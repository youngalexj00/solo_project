import React, { Component } from 'react';
import Cell from './Cell.jsx';

const styleHeader = {
  'display': 'flex'
}

class Header extends Component {
  render () {
    //console.log('CALL TO : Header Render')
    let headers = this.props.headers;
    let cells = []
    headers.forEach((header, index) => {
      cells.push((<Cell value={header} key={'headerCellKey'+index}/>))
    })
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