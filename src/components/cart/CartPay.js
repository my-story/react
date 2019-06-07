import React, {Component} from 'react'
import Cookies from 'universal-cookie'
import UserContext from '../contexts/UserContext';
import Checkout from '../Payment/Checkout'

// Latest impletantion Stripe
import Stripe from '../Payment/Stripe'

const cookies = new Cookies();

class CartPay extends Component{
    state={
        rate:this.props.location.state.rate,
        billing:this.props.location.state.billing,
        address:this.props.location.state.address,
        products: cookies.get("Products"),
        total: 0,
        tax: 0
    }
static contextType = UserContext;

getTotal=()=>{
var counter = 0;
const cookies = new Cookies();
const cookieArr = cookies.get("Products");

if(cookies.get("Products") === undefined){
  return
}

if(cookieArr !== undefined){
for (var i = 0; i < cookieArr.length; i++){
  counter += (cookieArr[i].prize * cookieArr[i].qty)
}
}
if (counter === 0){
  this.setState({
    ...this.state,
    products:null
  })
}


return counter;

}


totalCost = ()=>{
    const { rate} = this.state
    let total = 0
    let tax = Number((+this.getTotal() * 0.025).toFixed(2))
    total = Number((+rate.amount + +this.getTotal() + +tax).toFixed(2))
    this.setState({total, tax})
}

componentDidMount(){
    this.totalCost()
}

    render(){
        console.log(this.state)
        const { products } = this.state 
        // if(product.length === 0){
        //     return(
        //         <div>
        //             Loadinnn
        //         </div>
        //     )
        // }
        return(
            <div>
                <h2>
                order review:
                </h2>
                <div>
                    <p>Order Summary</p>
                    {products.map((i,index)=>{
                    return(

                        <div key={index} className="influencer-card">
                        <p>name: {i.model}</p>
                        <p>price: {i.price}</p>
                        <p> {i.description} </p>
                        </div>

                    )
                })}
                        <p>Price: ${this.getTotal()}</p>
                        <p>Shipping: ${this.state.rate.amount}</p>
                        <p>Tax: ${this.state.tax}</p>
                        <p>Total: ${this.state.total}</p>
                </div>

                <Stripe total={this.state.total}></Stripe>

                    <Checkout 
                    // onClick={this.validateAddress()}
                    name={`You have ${this.state.products.length}# of item(s)`}
                    description={"thank you for buying with my story"}
                    amount={this.state.total}
                    deleteProducts={this.deleteProducts}
                    user={this.props.user}   
                    address={this.state.address}       
                    >
                    </Checkout> 
            </div>
        )
    }
}

export default CartPay