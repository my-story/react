import React, { Component } from 'react';

// NEEDS BACKEND ROUTESS
// NEEDS BACKEND ROUTESS
// NEEDS BACKEND ROUTESS
// NEEDS BACKEND ROUTESS
// NEEDS BACKEND ROUTESS
// NEEDS BACKEND ROUTESS

class Contact extends Component {
    render(){
        return(

            <div className="contact-page">
                <h1> Contact us - <br></br>warm response guaranteed  </h1>
                <div className="contact-section">
                    <div className="contact-inputs">
                        <div>
                            <input className="inputs-login-styling" placeholder="Name"></input>
                            <input className="inputs-login-styling" placeholder="Email"></input>
                        </div>
                        <textarea className="textarea-styling" rows="4" placeholder="Your message..."></textarea>
                        <div className="contact-button">
                        <button className="submit-button">Submit</button>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="contact-address">
                    <p><b>478 Young Drive <br></br> 
                    Brandon, FL 33511, United States</b></p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Contact