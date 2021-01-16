import React from "react";
function Home() {
    return(
        <div className="Content">
            <div className="Home">
                <p><h1>Welcome</h1> <b>Web Qart is the one and only place where you can get right platform to advertise your product or can get suitable advertisements to publish on your magazines , newspapers , websites and many more platforms to earn some real money. </b>  </p>
                <h2>Site Instructions</h2>
                <ol>
                    <li><img src="/images/sidemenubutton.png" alt="" width="100px"/> By clicking this bars button which you can find on the top left of this page you will get a side menu option.  </li>
                    <li>
                        Inside the side menu you can find the following options :-
                        <ol>
                            <br/>
                            <img src="/images/sidemenu.png" alt=""/>
                            <br/><br/>
                            <li>First option you  will see is Home button by clicking it you can get back to this page from anywhere so if you forget  site instructions while working fell free to use it.</li>
                            <li><p>Second option you will find is Publishers by clicking it you can see all the available publishers to whom you can contact to advertise your product.Steps to do it are as follows :- </p>
                                <img src="/images/publishersCard.png" alt="" />
                                <ul>
                                    <br/><br/><br/>
                                    <li>i) Inside  publishers option you can find publishers card on the top of this card you can find platform logo image .</li>
                                    <li>ii)Then there is a platform name of publisher.</li>
                                    <li>iii)Then you can find the pricing set by the publisher with the status or conditions for that price.</li>
                                    <li>iv)Then there is a description about that publisher with the specification of column.</li>
                                    <li>v) Then you can find chat button by this button you can talk with the publisher for further process.</li>
                                    <br/><br/><br/><br/><br/>
                                </ul>
                            </li>
                            <li><p>Third option you will find is Advertisers by clicking it you can see all the available advertisers to which you can contact to publish their advertisement to your  publishing platform.steps to do it are as follows :-</p>
                                <img src="/images/advertisersCard.png" alt=""/>
                                <ul>
                                    <br/><br/><br/>
                                    <li>i) Inside  advertisers option you can find advertisers card on the top of this card you can find brand logo image .</li>
                                    <li>ii) Then there is a Brand name of advertiser.</li>
                                    <li>iii) Then you can find the offered price set by the advertiser with the status or conditions for that price.</li>
                                    <li>iv) Then there is a description about that advertiser with the specification of advertisement.</li>
                                    <li>v) Then you can find chat button by this button you can talk with the advertiser for further process.</li>
                                    <br/><br/><br/><br/><br/>
                                </ul>
                            </li>
                            <li><p>Fourth option you will find is Add Publisher by this option you can apply for publisher card by simply filling up Apply publisher form.</p></li>
                            <br/>
                            <li><p>Fifth option you will find is Add Advertiser by this option you can apply for Advertisement card by simply filling up Apply Advertisement form.</p></li>
                            <br/>
                        </ol>
                    </li>
                    <li>
                        <img src="/images/profilebutton.png" alt="" width="100px"/>By clicking this profile button which you can find on the top right of this page you will get profile options.
                        <br/><br/>
                        <ul>
                            <li><img src="/images/profile.png" alt="" className="ProfileImage"/><br/><br/><br/>Inside profile first you can see your profile image below that you can see your username and after that you can find two buttons first button  is for settings which is described in next section the second  button is Logout button using this button you can logout yourself. </li>
                            <br/><br/><br/><br/><br/><br/><br/>
                            <li><img src="/images/settings.png" alt="" className="SettingsImage"/><br/><br/><br/>Inside settings you can  find  two options first option change username can be used to change your username and second option change profile  photo can be used to change your profile photo.</li>
                            <br/><br/><br/><br/><br/><br/>
                        </ul>
                    </li>
                </ol>


            </div>
            {/*<br/><br/><br/>*/}
            {/*<h2>Home</h2>*/}
        </div>
    )
}
export default Home