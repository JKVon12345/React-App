import { Component } from 'react';
import Playlist from './Playlist.js';
import './PageMenu.css';


class PageMenu extends Component {

    render () {
        console.log(this.props);
        return (
            <div>
                {this.props.playlists.map((playlist, index, arr) => (
                    <Playlist item={playlist} index={index} arr={arr} />
                ))}

            </div>
        )};
}

export default PageMenu