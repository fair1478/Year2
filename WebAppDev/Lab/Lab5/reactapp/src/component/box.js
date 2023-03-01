import React from 'react';
import { Component } from 'react';
import CounterButton from './button';
import Display from './display';
import "./box.css"

class Box extends Component {
    state = { 
        count: 0 
    };

    handleCallback = (childData) => {
        if(childData === 1){
            if(this.state.count < 10)
            {
                this.setState({ count: this.state.count + 1 });
            }
            else{
                alert("Cannot Vote more")
            }
        }
        else if(childData === -1){
            if(this.state.count > 0){
                this.setState({ count: this.state.count - 1 });
            }
            else{
                alert("Cannot unvote")
            }
        }
    }

    render() {
        return (
            <div id='mainDiv'>
                <div id='box'>
                    <div id='first'>
                        <div id='row1'>
                            <h2>{this.props.type}</h2>
                            <h4>{this.props.name}</h4>
                            <p>{this.props.describe}</p>
                        </div>
                        <div id='row2'>
                            <img src={this.props.imageSrc}
                            width="100%" alt='insertPic' ></img>
                        </div>
                    </div>

                    <div id='second'>
                        <CounterButton
                        parentCallback={this.handleCallback}
                        title="Click to Vote"
                        />

                        <Display count= {this.state.count === 0 ? "MIN" : (this.state.count === 10 ? "MAX" : this.state.count)}/>

                        <CounterButton
                        parentCallback={this.handleCallback}
                        title="Click to Unvote"
                        />

                    </div>
                </div>

            </div>
    );
}
}

export default Box;
