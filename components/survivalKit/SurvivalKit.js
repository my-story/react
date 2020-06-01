import React,{ Component } from 'react';
import * as toastr from 'toastr';
import KitServices from '../../services/KitServices';
import ProductKit from './ProductKit';
import TechniqueKit from './TechniqueKit';
import TipKit from './TipKit';

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
        console.log("KIT - SurvivalKit", kit)
        
        if (kit === undefined || kit.products === undefined || kit.techniques === undefined) {
            return(<div>...</div>)
        } else {
            return (
                <div className="product-kit-page">
                {/* <div className="rectangle-survival-title">
                <img className="rectangle-survival-title-picture" src={kit.influencer.profilePic}/>
                <div className="review-survival-title">
                  <div>
                    <h2 id="review-survival-title"><b>{kit.title}</b></h2>
                  </div>
                  <div>
                     <h4 id="review-survival-title-name">{kit.influencer.name.firstName} {kit.influencer.name.lastName}</h4>
                  </div>
                </div>
            
				<img id="survival-title-bookmark-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="bookmark" />
            
            </div> */}
                {kit.products.map((p, index) => {
                    let product = p.product;
                    return(
                    <ProductKit p={p} product={product} kit={kit} ></ProductKit>
                    )
                })}
    
                {/* //Techniques DESIGN FIGURE OUT How to dispaly all of them */}
                {kit.techniques.map((technique , index) => {
                    return(
                        <TechniqueKit technique={technique} kit={kit}></TechniqueKit>
                    )
                })
                }

                {/* TIPS MAP */}
                {kit.tips.map(( tip, index ) => {
                    return(
                        <div key={index}>
                            <TipKit tip={tip} kit={kit} key={index}></TipKit>
                        </div>
                    )
                })}

        {/* <div className="technique-survival-kit-card">
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
            <div className="line-2"></div>
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
        </div> */}
                </div>
            )    

        }
            }
}

export default SurvivalKit;