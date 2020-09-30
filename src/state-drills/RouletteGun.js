import React, {Component} from 'react';

class RouletteGun extends Component {
    state = {
        chamber: null,
        spinningTheChamber: false,
        bulletInChamber: 8,
        timeout: null,
    }

    handleButtonClick = () => {
        this.setState({
            spinningTheChamber: true
        })

        this.setState({
            timeout: setTimeout(() => {
                this.setState({
                    chamber: Math.ceil(Math.random() * 8),
                    spinningTheChamber: false
                })
            }, 2000)
        }) 
    }

    componentWillUnmount(){
        clearTimeout(this.state.timeout);
        console.log(this.state.timeout);
    }

    render(){
        let sentence = '';


        if(this.state.spinningTheChamber){
            sentence = "Spinning the chamber and pulling the trigger!";
        }else if(this.state.chamber === this.state.bulletInChamber){
            sentence = "BANG!!!";
        }else{
            sentence = "You're safe!";
        }

        return (
            <div>
                <button onClick={() => this.handleButtonClick()}>Pull the Trigger!</button>
                <p>{sentence}</p>
            </div>
        )
    }

};

export default RouletteGun;