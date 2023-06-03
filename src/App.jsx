import * as React from 'react';
import './App.css'
import Header from'./components/Header/Header'
import Body from './components/ItemListContainer/ItemListContainer';

function App() {
  

  return (
    <>
  


  <div className="navbar">
  <Header />
  </div>
  <div className='main'>
    <Body title ="Hello World"  subtitle="Click on the Cart" />

  </div>
  
    </>
  )
}

export default App
