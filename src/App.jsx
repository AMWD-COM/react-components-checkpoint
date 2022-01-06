import React from 'react'
import './App.css'
import Address from './Component/Profile/Address'
import FullName from './Component/Profile/FullName'
import ProfilePhoto from './Component/Profile/ProfilePhoto'

function App() {
  let user = {
    lastname: 'Cat',
    firstname: 'Glasses',
    address: 'The Great gutters of bab el oued',
    url:'https://img-19.ccm2.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg'
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <p className='btn-hello'>HELLO WORD !</p>
        <ProfilePhoto image={user.url} />
        <FullName firstname={user.firstname} lastname={user.lastname} />
        <Address address={user.address} />
      </header>
    </div>
  );
}

export default App
