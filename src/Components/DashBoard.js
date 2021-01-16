import React,{useState} from 'react';
import NavBar from "./NavBar";
import Home from "./Home";
function DashBoard(props) {
const [state,setState]=useState(<Home/>);

    return(
        <div className="Dashboard">
            <NavBar {...props} onclick={e=>{setState(e)}}>{state}</NavBar>
        </div>
    )
}
export default DashBoard