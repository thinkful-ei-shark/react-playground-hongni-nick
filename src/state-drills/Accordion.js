import React, { Component } from 'react';

class Accordion extends Component {
  defaultProps = {
    sections: []
  };

  state = {
    currentSection: null
  };

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  render() {
    let sections = this.state.props.sections;
    let sectionElements = sections.map((section, index) => {
      return (
        <li>
          <button onClick={() => this.handleButtonClick()}>{section.title}</button>
          {(this.state.currentSection === index) && (<p>{section.content}</p>)}
        </li>
      );
    });

    return (
      <ul>
        {sectionElements}
      </ul>
    );
  }
}

export default Accordion;