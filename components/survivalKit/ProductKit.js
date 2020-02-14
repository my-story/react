import React, { Component } from 'react';

class ProductKit extends Component {
    state = {
        size: "150px",
    }

    openCard = () => {
        let newSize = this.state.size === '150px' ? '300px' : '150px';
        this.setState({ size: newSize });
    };

    shrinkParagraph = (p) => {
        // const {kit} = this.state;
        const length = p.length;
    
        if (this.state.size === "150px") {
            if (length > 100){
                return(
                    <p>{p.substring(0,100)} ...</p>
                )
            } else {
               return(
                   <p>{p}...</p>
               )
            }
        } else {
            return(
                <p>{p}</p>
            )
        }
    };

    addFavorite = () => {
        console.log(this.props.p._id)
    }
    showMore = () => {

        if (this.state.size === "150px") {
            return(
            <div onClick={this.openCard} className="learn-more-survival">
                <p>Show more</p>
                <img id="arrow-down-kit" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg" alt="laern more arrow" />
            </div>
            )
        } else {
            return(
                <div onClick={this.openCard} className="learn-more-survival">
                <p>Show less</p>
                <img style={{transform:"rotate(-180deg)"}}id="arrow-down-kit" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg" alt="laern more arrow" />
            </div>
            )
        }
    };

    render(){
        const product = this.props.product;
        const p = this.props.p;

        return(
            <div style={{height:this.state.size}} className="survival-kit-card">
            <div className="survival-card-image-div">
                <img id="survival-image" src={product.images}/>
            </div>
            <div className="kit-description-div">
                <div className="kit-name-category">
                    <p id="product-name"><b>{product.model}</b></p>
                    <div className="kit-category-bubble">
                        <div>
                            <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg"alt="" />
                            <span>{product.category}</span>
                        </div>
                    </div>
                </div>
                <div className="kit-description-p">
                    {this.shrinkParagraph(p.comment)}
                </div>
                    {this.showMore()}
            </div>
            <div className="line-2"></div>
            <div className="survival-prize-div">
            <div className="survival-save-favorite">
                <img onClick={this.addFavorite} src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="bookmark" />
            </div>
                <p id="survival-prize">${product.prize}</p>
                <button className="survival-kit-add-to-cart">Add to card</button>
            </div>
        </div>
        )
    }
}

export default ProductKit