import React from "react";
function AddAdvertisement() {
    return(
        <div className="Content">
            <div className="Apply">
                <br/><br/>
                <h2>Apply Advertisement</h2><br/><br/>
                <form action="">
                    <label style={{float:"left"}}>Brand logo- <input type="file" style={{float:"right"}}/></label><br/><br/>
                    <label style={{float:"left"}}>Platform name- <input type="text" placeholder="Enter platform name..." style={{float:"right"}}/></label><br/><br/>
                    <label style={{float:"left"}}>Price- <input type="text" placeholder="Enter offer price..." style={{float:"right"}}/></label><br/><br/>
                    <label style={{float:"left"}}> Status/Condition- <input type="text" placeholder="Enter conditions..." style={{float:"right"}}/></label><br/><br/>
                    <label style={{float:"left"}}>Description- <textarea placeholder="Enter description here..." style={{float:"right"}}></textarea></label><br/>
                    <button className="btn btn-primary">Submit</button>
                </form>
                <br/><br/><br/><br/>
            </div>
        </div>
    )
}
export default AddAdvertisement