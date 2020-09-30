import React, { Component } from 'react';

class Accordion extends Component {
  static defaultProps = {
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

  handleButtonClick(index){
    this.setState({currentSection: index})
  }

  render() {
    let sections = this.props.sections;
    let sectionElements = sections.map((section, index) => {
      return (
        <li key={index}>
          <button onClick={() => this.handleButtonClick(index)}>{section.title}</button>
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