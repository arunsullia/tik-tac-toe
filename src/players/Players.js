import React, { Component } from 'react';

class Players extends Component{
    render(){
        return <div>
            {this.props.playerLabel}: <input type="text" onChange={this.props.enterPlayerName} name={this.props.playerLabel}></input>
        </div>
    }
}

export default Players;