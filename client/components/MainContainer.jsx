import React, { Component } from 'react';
import TableDisplay from './TableDisplay.jsx'
import TableFinder from './TableFinder.jsx';
class MainContainer extends Component {

  render() {
    return (
      <div>
        Main Container
        <TableFinder />
        <TableDisplay />
      </div>
    )
  }
}


export default MainContainer;