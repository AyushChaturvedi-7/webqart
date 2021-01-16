import React,{useState} from 'react';
import ChatBox from "./ChatBox";
function Advertisers(props) {
    const [advertisers,addAdvertisers]=useState([
        {src:"/images/classmate.png",title:"Classmate",price:"6000/day",status: "by popularity",
            Description:"Classmate makes best stationary products and works around the globe .An advertisement column is needed preferable on e-learning website dimensions of advertisement are flexible and will be set according to available column. "},
        {src:"/images/royal_enfield.jpg",title:"Royal Enfield",price:"8000/day",status: "by popularity",
            Description:"Royal Enfield makes best motor bikes  and works around the globe .An advertisement column is needed preferable on e-learning website dimensions of advertisement are flexible and will be set according to available column."},
        {src:"/images/lenovo.jpg",title:"Lenovo",price:"10000/day",status: "by popularity",
            Description:"Lenovo makes best mobile phones and laptops and works around the globe .An advertisement column is needed preferable on e-learning website dimensions of advertisement are flexible and will be set according to available column."},
        {src:"/images/surfexcel.jpg",title:"Surfexcel",price:"5000/day",status: "by popularity",
            Description:"Surfexcel makes best laundry products and works around the globe .An advertisement column is needed preferable on e-learning website dimensions of advertisement are flexible and will be set according to available column."}]);
    return(
        <div className="Content">
            {
                advertisers.map(advertiser=>{
                    return(
                        <div className="Card">
                            <img src={advertiser.src} alt="not  set"/>
                            <h5>{advertiser.title}</h5>
                            <h6>price-  {advertiser.price}</h6>
                            <h6>status-  {advertiser.status}</h6>
                            <div className="Description">
                                Description-  {advertiser.Description}
                            </div>
                            <button className="btn btn-primary" onClick={e=>{props.onChange(<ChatBox {...props}/>)}}> Chat &nbsp;<i className="fa fa-comments"></i> </button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Advertisers