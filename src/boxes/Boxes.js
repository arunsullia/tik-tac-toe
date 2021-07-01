import React, { Component } from 'react';
import './Boxes.css';

class Boxes extends Component {

    render() {
        return <tr>
            <td onClick={this.props.handleClick}></td>
            <td onClick={this.props.handleClick}></td>
            <td onClick={this.props.handleClick}></td>
        </tr>;
    }
}

export default Boxes;