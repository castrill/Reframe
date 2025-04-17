import './Produto.css'



function Produto(props) {

    function testar(produtos) {
        alert(produtos)
      }
      
      
  return (
    <div className='container-produto'>
        <h2>Produto</h2>
        <p>{props.modelo}</p>
        <p>R${props.preco}</p>

        <button onClick={testar}>TESTAR</button>
        {produtos.map((p) => (
            <Produto modelo={p.modelo} preco={p.preco}/> 
        ))}



    </div>
  )
}

export default Produto