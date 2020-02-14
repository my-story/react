import React,{ Component } from 'react';
import * as toastr from 'toastr';
import KitServices from '../../services/KitServices';
import ProductKit from './ProductKit';
import TechniqueKit from './TechniqueKit';

class SurvivalKit extends Component {

    state = {
        kit : {}
    };  
    
    static getInitialProps({ query: { id } }) {
        return { id };
    }

    componentDidMount = () => {
        KitServices.getKit(this.props.id)
        .then((kit) => {
            this.setState({kit})
        })
        .catch((err) => console.log(err))
        }


//Add three dots ... after a certain length of the string.
    shrinkParagraph = (p) => {
        // const {kit} = this.state;
        const length = p.length;
         if (length > 100){
             return(
                 <p>{p.substring(0,100)} ...</p>
             )
         } else {
            return(
                <p>{p}...</p>
            )
         }
    }
    render(){
        
        const {kit} = this.state || {};

        if (kit === undefined || kit.products === undefined || kit.techniques === undefined) {
            return(<div>...</div>)
        } else {
            return (
                <div className="product-kit-page">
                {kit.products.map((p, index) => {
                    let product = p.product;
                    return(
                    <ProductKit p={p} product={product}></ProductKit>
                    )
                })}
    
                {/* //TIPS DESIGN FIGURE OUT How to dispaly all of them */}
            {kit.techniques.map((technique , index) => {
                return(
                    <TechniqueKit technique={technique}></TechniqueKit>
                )
            })
        }
        <div className="technique-survival-kit-card">
            <div className="survival-card-image-div">
                <img id="survival-image"/>
            </div>
            <div className="technique-rebound-kit-description-div">
                <div className="technique-kit-name-category">
                    <p id="technique-name"><b>Name of Technique</b></p>
                    <p id="technique-word">Technique</p>
                    <div className="technique-kit-category-bubble">
                        <div>
                            <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg"alt="" />
                            <span>Category</span>
                        </div>
                    </div>
                </div>
                <div className="technique-kit-description-p">
                    <div className="technique-header-div">
                        <p><b>Header</b></p>
                    </div>
                    <div className="technique-steps">
                        <p>- description</p><br></br>
                        <p>- description</p><br></br>        
                    </div>
                </div>
            </div>
            {/* <div className="line-2"></div> */}
            <div className="recomendation-technique-survival-prize-div">
                <div className="recommend-div">
                    <p>Rebound Recommends</p>
                </div>
                <div className="recommend-div-product">
                    <img id="recommend-product" src="https://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s1200x630.jpg" alt="" />
                    <div className="recommend-div-description"> 
                        <h4><b>Title of product</b></h4>
                        <p>Euismod tincidunt ut laoreet
                            dolore magna Lorem ipsum
                            dolor sit amet.
                        </p>
                        <p id="recommend-price">$300.00</p>
                     <button className="book-button-recommend add-to-cart"><b>Add to Cart</b></button>

                    </div>

                </div>

            </div>
        </div>
        {/* fwefwefwef */}

                <div className="techniques-kit-card">
                    <div className="tip-image-div">
                        <img id="survival-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1576256025/cloud.svg"/>
                    </div>
                    <div className="kit-description-div">
                        <p id="tip-name"><b>This is the name of the technique</b></p>
                        <p style={{color:"#F66C4F"}}>Technique</p>
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
                        <p id="tip-intro-description">Brief descriptin, yea yea , jajajaj esta tecnica es para energitarse despues de la siesta.</p>
                                <div className="learn-more">
                                    <div className="learn-word">
                            <span>Learn more</span>
                            <img id="arrow-down-kit" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg" alt="laern more arrow" />
                            </div>
                            <div className="learn-div">
                            <div className="learn-technique"> 
                            <p id="follow-these-steps"><b>Follow these steps:</b></p>
                            <ol style={{paddingLeft: "15px" }}>
                                <li>Drink 8 water drinks</li>
                                <li>Workout</li>
                                <li>Do it for the vine</li>
                            </ol>
                            </div>
                                                </div>
                        </div>
                    </div>
                    {/* <div className="line-2"></div> */}
                    <div className="tip-save-div">
                        <div className="survival-save-favorite technique">
                            <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="bookmark" />
                            <span>save to favorites</span>
                        </div>
                    </div>
                </div>
                </div>
            )    

        }
            }
}

export default SurvivalKit;