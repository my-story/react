import React, { Component } from 'react'
import InfluencerCreate from './InfluencerCreate';
import ProductCreate from '../products/ProductCreate';
import ProductServices from '../../services/ProductServices'
import InfluencerServices from '../../services/InfluencerServices'
import { Button } from 'antd';


class LinkProduct extends Component{
    state={
        influencer:{},
        product:{},
    }

    handleChange = (data, product) =>{
        this.setState({ 
            influencer: data,
            product: product
        })
    }
    onSubmit=()=>{
        let { influencer,product } = this.state
        ProductServices.productForm(product)
        InfluencerServices.createInfluencer(influencer)
            .then((pro,infl)=>console.log("res from submitting "+ pro,infl))
    }

    render(){
        let {influencer,product} = this.state
        console.log(influencer,product)
        return(
            <div>
                <InfluencerCreate onCreation={this.handleChange}/>
                <ProductCreate onCreation={this.handleChange}/>

                <Button onClick={this.onSubmit} type="dashed">Dashed</Button>

            </div>

        )
    }
}
export default LinkProduct