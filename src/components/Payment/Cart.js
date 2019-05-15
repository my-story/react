import React,{Component} from 'react'
import Checkout from '../Payment/Checkout'

class Cart extends Component{
    state={
        products: [],
        user: ""
    }
    getTotal(){
        var counter = 0;
    
        for (var i = 0; i < this.state.products.length; i++){
          counter += this.state.products[i].prize;
        }
        console.log("total");
        return counter;
      }
    componentDidMount(){
       
        this.setState({products:this.props.location.state.products , user:this.props.location.state.user})
    }
    render(){
        console.log(this.props)
        
        return(
            <div> 
                <Checkout 
                name={`You have ${this.state.products.length}# of item(s)`}
                description={"thank you for buying with my story"}
                amount={this.getTotal()}           
                >

                </Checkout>
                
            </div>

        )
    }
}
export default Cart