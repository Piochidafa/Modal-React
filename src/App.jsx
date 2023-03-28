import { useState } from 'react'
import './App.css'
import { Modal } from './components/Modal/Modal'

function App() {

  const [open, setOpen] = useState(false);



  return (
    <div className="App">
      <div className='Container'>
        <h1>Open the modal</h1>
        <button className='PPbutton' onClick={() => setOpen(!open)}>Abrir modal</button>
        <Modal taberto={open} funcao={() => setOpen(!open)}/>
      </div>
    </div>
  )
}

export default App
