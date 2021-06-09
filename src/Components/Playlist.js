import React, { Component } from 'react';
import './PageMenu.css';

class Playlist extends Component{

    render () {
        console.log(this.props);

        return (
            <React.Fragment>
                <p> {this.props.item} </p>
                {this.props.index === this.props.arr.length -1 ? "" : <p className="spacer">|</p>}
            </React.Fragment>
        )};
}

export default Playlist;
