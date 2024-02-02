import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { login } from "./store/login";

function App() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.login);

  function handleSubmit(event){
    event.preventDefault();
    dispatch(login({username, password}));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{display: "block"}} htmlFor="username">Usuário</label>
        <input id="username" type="text" value={username} onChange={({target}) => setUsername(target.value)}/>
        <label style={{display: "block"}} htmlFor="password">Senha</label>
        <input id="password" type="password" value={password} onChange={({target}) => setPassword(target.value)} />
        <br/>
        <button>Enviar</button>
        <br/>
        {data?.token}
      </form>
    </div>
  );
}

export default App;
