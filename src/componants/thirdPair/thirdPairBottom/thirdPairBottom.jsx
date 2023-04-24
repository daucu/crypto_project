import React, { useState } from 'react'
import './thirdPairBottom.css'
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

function ThirdPairBottom() {
    const [show, setShow] = useState(false);
    const goDown = document.getElementById  ('ansArea');

    const downHandler = (index) => {
    
        setShow(!show);

    }
    const upHandler = (index) => {

        setShow(!show);
    }
    let arr = [
        {
            question: "Quis nostrum exercitationem ullam corporis?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, neque qui velit. Magni dolorum quidem ipsam eligenditotam, facilis laudantium cum accusamus ullam voluptatibus commodi numquam, error, est. Ea, consequatur",
        },
        {
            question: "Reprehenderit qui in ea voluptate velit esse minima veniam?",
            answer: "Modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem enim ad minima veniam auis nostrum exercitationem irure dolor in reprehenderit in voluptate velit labore et dolore magna aliqua enim ad minim veniamquis nostrud exercitation ullamco.",
        },
        {
            question: "Autem vel eum iure reprehenderit qui in ea volupate?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, neque qui velit. Magni dolorum quidem ipsam eligenditotam, facilis laudantium cum accusamus ullam voluptatibus commodi numquam, error, est. Ea, consequatur",
        },
        {
            question: "Enim ipsam voluptatem quia voluptas sit aspernatur aut?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, neque qui velit. Magni dolorum quidem ipsam eligenditotam, facilis laudantium cum accusamus ullam voluptatibus commodi numquam, error, est. Ea, consequatur",
        }
    ]


    return (
        <div className='thirdPairBottom'>
            <h1>Frequently Asked Questions</h1>
            <p>Kolorem aue laudantium , totam rem aperiam eaue isa uae ab illo inventore veritatis ero uasier</p>
            <p>reatae vitae dicta sunt explicabo nemo enim.</p>

            {arr.map((item, index, key) => {
                return (
                    <>
                        <div className="thirdPairBottomBox">
                            <div className="questionArea  key='index' ">
                                <h3>{item.question}</h3>
                                {show ? <FaChevronUp ronUp style={{ fontSize: '20px', color: 'white', fontWeight: '600px', cursor: 'pointer' }} onClick={() => upHandler(index)} />
                                      : <FaChevronDown style={{ fontSize: '20px', color: 'white', fontWeight: '600px', cursor: 'pointer' }} onClick={() => downHandler(index)} />}
                            </div>

                            <div name='ansArea'  className="answerArea">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    </>
                )
            })}


        </div>
    )
}


export default ThirdPairBottom