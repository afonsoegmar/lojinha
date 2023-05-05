import React,{useState} from "react";
import Lojinha from "./Lojinha";
import Menu from "./Menu";

function App() {

 
  const [login, setLogin] = useState(1);






  return (
    <div className="App">
      <Menu/>
      
      {
         login == false ?
        <>
          <p> faça login para continuar</p>
          <button onClick={()=>setLogin(true)}> logar</button>
          
        </>
      :
          <Lojinha setLogin={setLogin}/>
          
     

       
     
     }


        
     
    </div>
  );
 }

export default App;
