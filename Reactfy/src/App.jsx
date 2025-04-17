import { useState } from 'react'
import './App.css'
import Produt from './components/Produto'
import Produto from './components/Produto'

function App() {

  const[produtos, setProdutos] = useState([
    {
        modelo:"Melancia",
        preco: 22

    },{
        modelo:"Pneu",
        preco: 220
    }
])




  return (
    <div className='container-app'>
      <Produto modelo={'Galaxy A15'} preco={809}/>
      <Produto modelo={'Smart TV 32 Polegadas'} preco={971.10}/>
      <Produto modelo={produtos[0].modelo} preco={produtos[0].preco}/>
    </div>
  )
}

export default App
