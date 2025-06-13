import React from 'react'
import './App.css'
import Logo from './components/Logo/Logo'
import Filter from './components/Filter/Filter'
import Tabs from './components/Tabs/Tabs'
import TicketList from './components/TicketList/TicketList'

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="main-content">
        <div className="sidebar">
          <Filter />
        </div>
        <div className="content">
          <Tabs />
          <TicketList />
        </div>
      </div>
    </div>
  )
}

export default App
