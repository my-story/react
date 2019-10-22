import React, { Component } from 'react';

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
                    <h3>Address</h3>
                </div>

            </div>
        )
    }
}

export default Contact