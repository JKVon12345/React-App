import React, {useState, useEffect, useReducer} from 'react';
import NavBar from './Components/NavBar.js';
import PageMenu from './Components/PageMenu.js';
import styles from './App.css';

const playlists = ['hello', 'this', 'that']

const App = () => {

  return (
    
    <div className="all">
      <NavBar PageTitle="JV Customs"/>
      <div className="mainbody">
        <PageMenu playlists={playlists}/>
      </div>
    </div>
  );
}

export default App;
