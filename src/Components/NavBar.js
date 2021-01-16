import React, {useState,useEffect} from 'react'
import LoginPage from "./LoginPage";
import Advertisers from "./Advertisers";
import Publishers from "./Publishers";
import Home from "./Home";
import AddPublisher from "./AddPublisher";
import AddAdvertisement from "./AddAdvertisement";
function NavBar(props){

    let [user,setUser]=useState(props.user)
    let [temp,setTemp]= useState(props.username);
    const changeUser=()=>{
        let temp=prompt("Enter new username:-")
        setUser(temp)
    }
    useEffect(()=>{
        if(temp===undefined){

        }else{
            setUser(temp)}
        },[])
    return(
        <div className="NavBar">
            <div className="Header">
                <div className="Logo2"></div>
            </div>
            <input type="checkbox" id="chk"/>
            <label htmlFor="chk" className="show-btn"><i className="fa fa-bars"></i></label>
            <label htmlFor="chk" className="hide-btn"><i className="fa fa-times"></i></label>
            <input type="checkbox" id="pro-chk" />
            <label htmlFor="pro-chk" className="show-pro-btn" ><i className="fa fa-user-circle-o"></i></label>
            <label htmlFor="pro-chk" className="hide-pro-btn"><i className="fa fa-times"></i></label>
            <div className="SideBar">
                <ul>
                    <li><a href="#" onClick={e=>{props.onclick(<Home/>)}}><i className="fa fa-home"><span>&nbsp;&nbsp;Home</span></i></a></li>
                    <li><a href="#" onClick={e=>{props.onclick(<Publishers {...props} username={user}/>)}}><i className="fa fa-thumbs-up"><span>&nbsp;&nbsp;Publishers</span></i></a></li>
                    <li><a href="#" onClick={e=>{props.onclick(<Advertisers {...props} username={user}/>)}}><i className="fa fa-thumbs-up"><span>&nbsp;&nbsp;Advertisers</span></i></a></li>
                    <li><a href="#" onClick={e=>{props.onclick(<AddPublisher/>)}}><i className="fa fa-thumbs-up"><span>&nbsp;&nbsp;Add publisher</span></i></a></li>
                    <li><a href="#" onClick={e=>{props.onclick(<AddAdvertisement/>)}}><i className="fa fa-thumbs-up"><span>&nbsp;&nbsp;Add Advertisement</span></i></a></li>
                </ul>
                <div className="Social">

                </div>

            </div>
            <div className="Profile">
                <div className="Profile-image"></div>
                <h3>{user}</h3>
                <input type="checkbox" id="pro-setting-chk"/>
                <label htmlFor="pro-setting-chk" className="show-setting-btn"><i className="fa fa-cog fa-spin"></i></label>
                <label htmlFor="pro-setting-chk" className="hide-setting-btn"><i className="fa fa-times"></i></label>

                <button className="btn btn-danger" onClick={e=>{props.onChange(<LoginPage {...props} />)}}>Logout</button>
                <div className="Settings">
                    <h2>Settings</h2>
                    <button className="btn btn-secondary CU" onClick={e=>changeUser()}>Change Username</button>
                    <button className="btn btn-secondary CP" >Change Profile photo</button>
                </div>
            </div>
            {/*{props.}*/}
            {props.children}
        </div>
    )
}
export default NavBar