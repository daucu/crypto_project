import React from 'react'
import './footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="firstColom">
                    <img src="https://elementorpress.com/templatekit-pro/layout39/wp-content/uploads/2022/03/logo_01.png" />
                    <p>Reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur
                        vel illum qui dolorem eum Quia voluptas sit aspernatur aut odit aut fugit, sed quia conse</p>
                    <div className="socialIcons">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaPinterestP />
                    </div>
                </div>


                <div className="secondColom">
                    <h3>About us</h3>
                    <div className="navLinks">
                        <div className="NavlinksBox">
                            <BiChevronRight  style={{color:'#e19725'}}/>
                            <p>Home</p>
                        </div>
                        <div className="NavlinksBox">
                            <BiChevronRight style={{color:'#e19725'}}/>
                            <p>About us</p>
                        </div>
                        <div className="NavlinksBox">
                            <BiChevronRight style={{color:'#e19725'}}/>
                            <p>Services</p>
                        </div>
                        <div className="NavlinksBox">
                            <BiChevronRight style={{color:'#e19725'}} />
                            <p>Pricing</p>
                        </div>
                        <div className="NavlinksBox">
                            <BiChevronRight style={{color:'#e19725'}}/>
                            <p>Portfolio</p>
                        </div>
                        <div className="NavlinksBox">
                            <BiChevronRight style={{color:'#e19725'}}/>
                            <p>Blog</p>
                        </div>
                    </div>
                </div>


                <div className="thirdColom">
                    <h3>Useful links</h3>
                    <div className="navLinks">
                        <div className="NavlinksBox">
                            <BiChevronRight style={{color:'#e19725'}}/>
                            <p>Help desk</p>
                        </div>
                        <div className="NavlinksBox">
                            <BiChevronRight style={{color:'#e19725'}}/>
                            <p>Softwear</p>
                        </div>
                        <div className="NavlinksBox">
                            <BiChevronRight style={{color:'#e19725'}}/>
                            <p>Forum</p>
                        </div>
                        <div className="NavlinksBox">
                            <BiChevronRight style={{color:'#e19725'}}/>
                            <p>Faq's</p>
                        </div>
                        <div className="NavlinksBox">
                            <BiChevronRight style={{color:'#e19725'}}/>
                            <p>Recourses</p>
                        </div>
                        <div className="NavlinksBox">
                            <BiChevronRight style={{color:'#e19725'}} />
                            <p>Payments</p>
                        </div>
                    </div>
                </div>


                <div className="fourthColom">
                    <h3>Contect Us</h3>
                    <h4>Address : </h4>
                    <p>121 King Street Melbourne, 3000, Australia   </p>
                    <h4>Emails</h4>
                    <p>info@strackcoin.com  </p>
                    <h4>Phone</h4>
                    <p >61 3 8376 6284</p>
                </div>
            </div>
        </>
    )
}

export default Footer