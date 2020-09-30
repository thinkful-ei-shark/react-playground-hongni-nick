import React, { Component } from 'react';

class Bomb extends Component {
  state = {
    count: 0
  }

  constructor(props) {
    super(props);
    console.log(props);
    this.setState({
      count: props.count
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const newCount = this.state.count + 1;
      this.setState({ count: newCount });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let word = '';

    if (this.state.count >= 8) {
      word = 'BOOM!!!!';
      this.state.count = 0;
    } else if (this.state.count % 2 === 0) {
      word = 'tick';
    } else {
      word = 'tock';
    }

    return (
      <div>
        <p>{word}</p>
      </div>
    );
  }
}

export default Bomb;