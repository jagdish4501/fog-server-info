// App.js
import React from 'react';
import './App.css';
import List from './List';
import data from './data';
import Header from './Header';
import Info from './Info';
import NetInfo from './NetInfo';

function App() {



  return (
    <div className="app">

      <div className='section-1'>
          <img src="" alt="" />
      </div>


      <div className="section-2">
        <Header/ >
        
        <Info/>
        {/* for making page dynamic we can pass the data  to info component */}

        <NetInfo/>
        {/* for making page dynamic we can pass the data  to info component */}

        <div className='list-1'>
          <List data={data.data_1}/>
          <List data={data.data_2}/>
          <List data={data.data_3}/>
        </div>
      </div>


      <div className='section-3'>
        
      </div>

      
    </div>
  );
}

export default App;
