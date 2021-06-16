import React, {Component} from 'react';
import NavBar from './Components/NavBar.js';
import PageMenu from './Components/PageMenu.js';
import './App.css';
import DisplayData from './Components/ChamData.js'

const playlists = ['hello', 'this', 'that']


class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      ip_address: "..."
    };

    // this.processRequest = this.processRequest.bind(this);
  }

  render () {
    return (
    
      <div className="all">
        <NavBar PageTitle="JV Customs"/>
        <DisplayData />
        <div className="mainbody">
          <PageMenu playlists={playlists}/>
        </div>
      </div>
    );  
  }
}

export default App;
