// App.js
import React from 'react';
import './App.css';
import List from './List';

function App() {

  const data={
    heading:"ONLINE PLAYER",
    list_item:[
      { id: 1, name: 'PLAYER1',value:'EROUP - DE' },
      { id: 2, name: 'PLAYER2',value:"ON" },
      { id: 3, name: 'PLAYER3',value:"ON" },
    ]
  }
  return (
    <div className="app">

      <div className='section-1'>
          <div>&#x23FB;</div>
          <div>&#x23FB;</div>
      </div>


      <div className="section-2">

        <div className='header font-s font-600'>&lt;    /  MULTIPLAYER / SERVER BROWSER   /</div>
        <div className='font-900 font-xxl'>SERVER INFO</div>
        <div className='pading-top-70'>
          <div className='font-xl font-600 '>! RC3-BASEMAPS</div>

          <div className='font-l font-500 '>
            <img src="https://flagcdn.com/16x12/us.png" srcset="https://flagcdn.com/32x24/us.png 2x,https://flagcdn.com/48x36/us.png 3x" width="16" height="12" alt="America" style={{paddingRight:'10px'}}>  
            </img>
             CONQUEST LARGE -LANCANG DAM - CUSTOM - 60 HZ            
          </div>

          <div className='font-l font-500'>server protected by ThQ_K-50 AntiCheat. Vip !RulQS, questions, Request, Appeal. Visit us: www.øpg.gg I Discord https://discord.gg/3r5NK4d</div>
          
          <div className='btn'>
            <button className='glowing-btn'><span className='glowing-txt'>J<span className='faulty-letter'>O</span>IN</span></button>

            <button className='glowing-btn'><span className='glowing-txt'>S<span className='faulty-letter'>P</span>ECTATE</span></button>

            <button className='glowing-btn'><span className='glowing-txt'>JOI<span className='faulty-letter'>N AS</span> A COMMANDER</span></button>

            <button className='glowing-btn'>
              <span className='glowing-txt'> 
                <span className='faulty-letter'> 
                &#9733;
                </span>13672
              </span> </button>
          </div>
          
        </div>

        <div className='list-2'>
          <div>
            <div className='font-l font-900'> PLAYER</div>
            <div className='font-l font-900'>60/64</div>
          </div>
          <div>
            <div className='font-l font-900'> PING</div>
            <div className='font-l font-900'>104 ms</div>
          </div>
          <div>
            <div className='font-l font-900'> TICKRATE</div>
            <div className='font-l font-900'>60 Hz</div>
          </div>
          
        </div>

        <div className='list-1'>
          <List data={data}/>
          <List data={data}/>
          <List data={data}/>
        </div>
      </div>




      <div className='section-3'>
        
      </div>
    </div>
  );
}

export default App;
