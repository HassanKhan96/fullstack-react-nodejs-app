import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StripeCheckout from 'react-stripe-checkout';

class Payment extends Component {
    render(){
        return (
            <StripeCheckout
                name="Emaily"
                description="Get 5 survays for $5"
                amount={500}
                token={token => this.props.getStripeToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
            >
                <button className="btn">
                    Add credits
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payment);