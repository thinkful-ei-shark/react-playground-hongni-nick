import React, {Component} from 'react';

class HelloWorld extends Component {
    state ={
        who: "World"
    };
    
    render(){
        return (
            <div className="helloworld">
                <p>Hello, {this.state.who}</p>
                <button onClick={() => this.handleButtonClick("Friend")}>Friend</button>
                <button onClick={() => this.handleButtonClick("React")}>React</button>
                <button onClick={() => this.handleButtonClick("World")}>World</button>
            </div>
        )
    };

    handleButtonClick = (word) => {
        this.setState({
           who: word 
        })    
    };

}

export default HelloWorld;