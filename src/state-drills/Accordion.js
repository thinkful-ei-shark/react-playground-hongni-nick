import React, { Component } from 'react';

class Accordion extends Component {
  defaultProps = {
    sections: []
  };

  state= {

  };

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <ul>
        <li>
          <button onClick={() => this.handleButtonClick()}>{titles}</button>
        </li>
      </ul>
    );
  }
}

export default Accordion;