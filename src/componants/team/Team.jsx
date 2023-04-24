import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import './team.css';


function Team() {
    let arr = [{
        img: "https://elementorpress.com/templatekit-pro/layout39/wp-content/uploads/2022/04/team-6.jpg",
        name: "James William",
        designation: "Dolorem eum",
        socials: {
            facebook: "https://www.facebook.com/",
            twitter: "https://twitter.com/",
            linkedin: "https://www.linkedin.com/"
        }
    }, {
        img: "https://elementorpress.com/templatekit-pro/layout39/wp-content/uploads/2022/04/team-5.jpg",
        name: "Ava Charlotte",
        designation: "Molestiae non",
        socials: {
            facebook: "https://www.facebook.com/",
            twitter: "https://twitter.com/",
            linkedin: "https://www.linkedin.com/"
        }
    }, {
        img: "https://elementorpress.com/templatekit-pro/layout39/wp-content/uploads/2022/04/team-4.jpg",
        name: "Grace Amelia",
        designation: "Velit esseuora",
        socials: {
            facebook: "https://www.facebook.com/",
            twitter: "https://twitter.com/",
            linkedin: "https://www.linkedin.com/"
        }
    }]

    let logos1 = ['https://elementorpress.com/templatekit-pro/layout39/wp-content/uploads/2022/03/01.png',
        'https://elementorpress.com/templatekit-pro/layout39/wp-content/uploads/2022/03/02.png',
        'https://elementorpress.com/templatekit-pro/layout39/wp-content/uploads/2022/03/03.png',
        'https://elementorpress.com/templatekit-pro/layout39/wp-content/uploads/2022/04/04.png',
    ]
    let logos2 = ['https://elementorpress.com/templatekit-pro/layout39/wp-content/uploads/2022/03/05.png',
        'https://elementorpress.com/templatekit-pro/layout39/wp-content/uploads/2022/03/06.png',
        'https://elementorpress.com/templatekit-pro/layout39/wp-content/uploads/2022/03/07.png',
        'https://elementorpress.com/templatekit-pro/layout39/wp-content/uploads/2022/03/08.png',
    ]


    return (
        <>
            <div className="team">
                <div className="teamTittle">
                    <h1>Our Team Members</h1>
                    <p>Solorem aue laudantium, totam rem aperiam eaue isa uae ab illo inventore veritatis ero uasier</p>
                    <p>reatae vitae dicta sunt explicabo nemo enim.</p>
                </div>
                <div className="testTestimonials">
                    {arr.map((item, index, key) => {
                        return (
                            <div className="testTestimonialsCard" key={index} >
                                <div className="testTestimonialsCardImg">
                                    <img src={item.img} alt='sorry photo cannot avilable ' />
                                </div>
                                <h3>{item.name}</h3>
                                <p>{item.designation}</p>
                                <div className="testTestimonialsCardSocials">
                                    <div>
                                        < FaFacebookF />
                                    </div>
                                    <div>
                                        < FaTwitter />
                                    </div>
                                    <div>
                                        < FaLinkedinIn />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="viewBtn">
                    View All
                </div>

                <div className="PartenersLogos">
                    <div className="PartenersLogos1">
                        {logos1.map((item, index) => {
                            return (
                                <div className="PartenersLogos1Img" key={index}>
                                    <img src={item} alt='sorry photo cannot avilable ' />
                                </div>
                            )
                        })}
                    </div>
                    <div className="PartenersLogos1">
                        {logos2.map((item, index) => {
                            return (
                                <div className="PartenersLogos1Img" key={index}>
                                    <img src={item  } alt='sorry photo cannot avilable ' />
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>

        </>
    )
}

export default Team