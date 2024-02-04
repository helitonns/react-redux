import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { adicionarDatas } from "./store/date";

function App() {
  const [partida, setPartida] = React.useState("");
  const [retorno, setRetorno] = React.useState("");
  const dispatch = useDispatch();

  function handleSubmit(event){
    event.preventDefault();

    dispatch(adicionarDatas({partida, retorno}));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="partida">Partida</label>
      <input type="date" id="partida" value={partida} onChange={({target}) => setPartida(target.value)}/>
      
      <label htmlFor="retorno">Retorno</label>
      <input type="date" id="retorno" value={retorno} onChange={({target}) => setRetorno(target.value)} />

      <button>Buscar</button>
    </form>

  );
}

export default App;
