import React, { Component } from 'react';

class Bomb extends Component {
  state = {
    count: 0
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

  componentDidUpdate(){
    if (this.state.count > 8) {
      clearInterval(this.interval);
      this.setState({count: 0});
    }
  }

  render() {
    let word = '';


    if (this.state.count >= 8) {
      word = 'BOOM!!!!';
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