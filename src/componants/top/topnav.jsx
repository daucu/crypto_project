import React from 'react'
import './topnav.css'
import { BsDashLg } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";

function Topnav() {
    return (
        <>
            <div className="topnav">
                <div className="navbar">
                    <div className="navbarLogo">
                        <img src="https://elementorpress.com/templatekit-pro/layout39/wp-content/uploads/2022/03/logo_01.png" />
                    </div>
                    <div className="navbarItems">
                        <div>Home</div>
                        <div>Service</div>
                        <div>About</div>
                        <div>Buy & Sell</div>
                        <div>Pages</div>
                        <div>Wallet</div>
                        <div className="navbarItemsBtn">
                            Contect Us
                        </div>
                    </div>
                </div>

                {/* -------------------------------top nav end-------------------------------- */}

                <div className="topnavContent">
                    <div className="topnavContentLeft">
                        <div className="topnavContentLeftTitle">
                            <h1>Buy & Sell </h1>
                            <h1>Crypto Currency</h1>
                            <p>Quisuam est rui dolorem iesum auia dolor sit amet consectetur </p>
                            <p>adieiso velit seoruiaer non numruam eius modi.</p>
                            <div className="topnavContentLeftBtns">
                                <div className="navbarItemsBtn">White Paper</div>
                                <div className="navbarItemsBtn">Buy Token</div>
                            </div>
                            <div className="topnavContentLeftSocials">
                                <BsDashLg style={{fontSize:"40px", marginRight:'20px', color:"white"  }} />
                                <div className="SocialsIcons">
                                    <FaFacebookF />
                                </div>
                                <div className="SocialsIcons">
                                    <FaTwitter />
                                </div>
                                <div className="SocialsIcons">
                                    <FaInstagram />
                                </div>
                                <div className="SocialsIcons">
                                    <FaPinterestP />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="topnavContentRight">
                        <img src="https://elementorpress.com/templatekit-pro/layout39/wp-content/uploads/2022/04/MicrosoftTeams-image-1.png" />
                        </div>
                </div>

            </div>
        </>
    )
}

export default Topnav