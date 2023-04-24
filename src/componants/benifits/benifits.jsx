import React from 'react'
import './benifit.css'
import { SlCheck } from 'react-icons/sl'

function Benifits() {
    return (
        <>
            <div className="benifits">
                <div className="benifitsTitle">
                    <h1>Why Should You Choose Crypto Wallet</h1>
                    <p>Qolorem aue laudantium, totam rem aperiam eaue isa uae ab illo inventore veritatis ero uasier</p>
                    <p> reatae vitae dicta sunt explicabo nemo enim.</p>
                </div>
                <div className="benifitsdown">
                    
                    <div className="benifitsdownFirst">
                        <div className="box">
                            <div className="boxTexts">
                                <h4>Faster Transactions</h4>
                                <p>Dolor reaellendus temorius</p>
                                <p>maiores alia</p>
                            </div>
                            <div className="boxIcon">
                                <SlCheck className='logo' />
                            </div>
                        </div>
                        <div className="box" >
                            <div className="boxTexts">
                                <h4>Secure Payments</h4>
                                <p>Rabore et dolore magna</p>
                                <p>eiusmo rute aliua</p>

                            </div>
                            <div className="boxIcon">
                                <SlCheck className='logo' />
                            </div>
                        </div>
                        <div className="box">
                            <div className="boxTexts">
                                <h4>Merchant Services</h4>
                                <p>Earum rerum hic tenetu</p>
                                <p>sapiente delectus</p>
                            </div>
                            <div className="boxIcon">
                                <SlCheck className='logo' />
                            </div>
                        </div>
                        <div className="box">
                            <div className="boxTexts">
                                <h4>Faster Transactions</h4>
                                <p>Dolor reaellendus temorius</p>
                                <p>maiores alia</p>
                            </div>
                            <div className="boxIcon">
                                <SlCheck className='logo' />
                            </div>
                        </div>
                    </div>

                    <div className="benifitsdownSec">
                        <img src="https://elementorpress.com/templatekit-pro/layout39/wp-content/uploads/2022/04/wallet.png" />
                    </div>

                    <div className="benifitsdownThird">
                        <div className="box">
                            <div className="boxIcon">
                                <SlCheck className='logo' />
                            </div>
                            <div className="boxTexts">
                                <h4>Qr-Code Scanner</h4>
                                <p>Dolor reaellendus temorius</p>
                                <p>maiores alia</p>
                            </div>

                        </div>
                        <div className="box">
                            <div className="boxIcon">
                                <SlCheck className='logo' />
                            </div>
                            <div className="boxTexts">
                                <h4>Payment Gateway</h4>
                                <p>Rabore et dolore magna</p>
                                <p>eiusmo rute aliua</p>
                            </div>

                        </div>
                        <div className="box">
                            <div className="boxIcon">
                                <SlCheck className='logo' />
                            </div>
                            <div className="boxTexts">
                                <h4>Flexible Usage</h4>
                                <p>Earum rerum hic tenetu</p>
                                <p>sapiente delectus</p>
                            </div>
                        </div>
                        <div className="box">
                        <div className="boxIcon">
                                <SlCheck className='logo' />
                            </div>
                            <div className="boxTexts">
                                <h4>Automated Operations</h4>
                                <p>Neque orro quisquam est raui</p>
                                <p>dolorem</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Benifits