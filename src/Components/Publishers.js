import React,{useState,useEffect} from 'react';
import ChatBox from "./ChatBox";
function Publishers(props) {
    let [publishers,addPublisher]=useState([
        {src:"/images/gfg.png",title:"geeks for geeks",price:"6000/day",status: "negotiable",
            Description:"Column available at landing page advertisements related to educational products , social well fare or NGOs are welcome to approach column size 256x256 image files of size less then 25 mega bites can be accepted "},
        {src:"/images/java-t-point.png",title:"Java T Point",price:"5000/day",status: "negotiable",
            Description:"Column available at landing page advertisements related to educational products , social well fare or NGOs are welcome to approach column size 256x256 image files of size less then 25 mega bites can be accepted"},
        {src:"/images/youtube.png",title:"Youtube",price:"12000/day",status: "not-negotiable",
            Description:"Column available at landing page advertisements related to educational products , social well fare or NGOs are welcome to approach column size 256x256 image files of size less then 25 mega bites can be accepted"},
        {src:"/images/facebook.jpg",title:"Facebook",price:"10000/day",status: "not-negotiable",
            Description:"Column available at landing page advertisements related to educational products , social well fare or NGOs are welcome to approach column size 256x256 image files of size less then 25 mega bites can be accepted"}]);
    return(
        <div className="Content">
            {
                publishers.map(publisher=>{
                    return(
                        <div className="Card">
                            <img src={publisher.src} alt="not  set"/>
                            <h5>{publisher.title}</h5>
                            <h6>price-  {publisher.price}</h6>
                            <h6>status-  {publisher.status}</h6>
                            <div className="Description">
                                Description-  {publisher.Description}
                            </div>
                            <button className="btn btn-primary" onClick={e=>{props.onChange(<ChatBox {...props}/>)}}> Chat &nbsp;<i className="fa fa-comments"></i> </button>
                        </div>
                    )
                })
            }

            {/*<ChatBox/>*/}
            {/*<h1>Publishers</h1>*/}
        </div>
    )
}
export default Publishers