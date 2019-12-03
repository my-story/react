import React,{ Component } from 'react';

class SurvivalKit extends Component {

    render(){
        return(
            <div>
            <div className="survival-kit-card">
                <div className="survival-card-image-div">
                    <img id="survival-image" src="https://www.stickpng.com/assets/images/580b585b2edbce24c47b2b90.png"/>
                </div>
                <div className="kit-description-div">
                    <p>Manduka</p>
                    <p id="product-name"><b>Pro Yoga Mat</b></p>
                    <div className="kit-category-bubble">
                        <div>
                            <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg"alt="" />
                           <span>Category</span>
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg"alt="" />
                           <span>Category</span>
                        </div>
                    </div>
                    <div className="learn-more">
                      <span>Learn more</span>
                        <img id="arrow-down-kit" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg" alt="laern more arrow" />
                        </div>
                </div>
                <div className="line-2"></div>
                <div className="survival-prize-div">
                    <p id="survival-prize">$150</p>
                    <button className="survival-kit-add-to-cart">Add to card</button>
                    <div className="survival-save-favorite">
                        <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="bookmark" />
                        <span>save to favorites</span>
                    </div>
                </div>

            </div>
         </div>
        )
    }
}

export default SurvivalKit