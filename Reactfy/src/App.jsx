import { useState } from 'react'
import './App.css'
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



function cadastrarProduto() {
    
  let produto = {

      Id: Date.now(),
      modelo: inputModelo,
      preco: Number(inputPreco)
  }
}

setProdutos([produto, ...produtos])


  return (
    <div className='container-app'>
      <div className='cards'>
        <input type="text" />
        <input type="text" />
        <button onClick={cadastrarModelo()}>Cadastrar</button>
      </div> 
      <Produto modelo={'Galaxy A15'} preco={809}/>
      <Produto modelo={'Smart TV 32 Polegadas'} preco={971.10}/>
      <Produto modelo={produtos[0].modelo} preco={produtos[0].preco}/>
    </div>
  )
}

export default App
