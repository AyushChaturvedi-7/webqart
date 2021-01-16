import './App.css';
import React,{useState} from "react";
import LoginPage from './Components/LoginPage';
function App() {
    const[state,setState]=useState(<LoginPage onChange={(value =>{setState(value)})}/>)
  return (
    <div className="App">
        {state}
    </div>
  );
}
export default App;