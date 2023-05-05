import React,{useState} from "react";

function Lojinha(props){

    const [valor, setValor] = useState(0);
    const [item, setItem] = useState(0);

    function finalizaCompra (){
        setValor(0)
        alert('Compra Finalizada com sucesso')
        setItem(0)
      }
      
      function realizaCompra (preco){
        
       setValor( valor + preco)
       setItem( item + 1)
       
       
      }

    return(
        <di>
                <button onClick={()=>props.setLogin(false)}> logar</button>
          <h1> Lojinha</h1>
          <p>Itens no carrinho:{item}</p>
          <p> Valor total: R${valor} </p>
          <button onClick={()=>finalizaCompra()}>Finalizar compra</button>

          <hr/>
          <p>
            camisa Polo - R$ 79,90 
            <button onClick={()=>realizaCompra( 79.90)}>comprar</button>
          </p>

          <p>
            calça Jeans - R$ 120,00 
            <button onClick={()=>realizaCompra( 120.00)}>comprar</button>
          </p>

          <p>
            Ténis nike - R$ 110,00 
            <button onClick={()=>realizaCompra(110.00)}> comprar</button>
          </p>
        </di>


    )
}
export  default Lojinha;