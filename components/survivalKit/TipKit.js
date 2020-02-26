import React, { Component } from 'react';
import * as toastr from 'toastr';
import UserContext from '../../components/contexts/UserContext';

class TipKit extends Component {
    state = {
        tip: {},
    }

    componentDidMount() {
        this.setState({tip: this.props.tip})
    }
    addFavorite = () => {
        if (!this.context.islogged) {
            return toastr.info('Log in to favorite');
        }
        console.log(this.state.tip._id)
    }
    render() {
        const {tip} = this.state;

        return (
            <div>
               <p>{tip.header}</p>
               <p>{tip.description}</p>
                Tips Needs Design
            <img onClick={this.addFavorite} src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="bookmark" />
            </div>
        );
    }
}

export default TipKit;