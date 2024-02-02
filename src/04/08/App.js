import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { autoLogin } from "./store/login";
import Header from "./Components/Header";
import Content from "./Components/Content";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(autoLogin());
  }, [dispatch]);


  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}

export default App;
