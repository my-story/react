import React from 'react';

function About(){
    return(
        <div className="about-page">
          <div className="about-heading">
            	<div>
            	<span><b>We are in the quest for improving</b></span>
            	</div>
            	<div id="overall-expirience"> 
       				<span><b>people's life and</b></span><span style={{color:"#F66C4F"}}><b> overall experiences!</b></span>
            	</div>
          </div>
          <div className="about-description">
							<div className="description">
                <p>We do this by handpicking specific experts and asking them for a product, place, experience, etc., which has helped them personally be successful in their careers and achieve their goals. Luckily, they have decided to share their insights with you so that you can unlock your true potential</p>
							</div>
        		<div className="video-section">
          			<div className="video-message">
            		<h1><b>What is it all about?</b></h1>
            		<p>Why wouldn't you trust the best of the best? <br></br></p>
            		<span><b>Watch a short video about us</b></span>
          		</div>
							<div id="video-about-us-container">
								<input type="image" id="video-start" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566406923/btn.svg" />
								<img id="about-us-video" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566405071/Video.png" alt="video-about-us"/>
							</div>
        		</div>
					</div>
					<div className="about-who-are-we">
						<div><span><b>Who are we?</b></span></div>
						<div></div>
						<div></div>
					</div>
        </div>
    )
}

export default About;