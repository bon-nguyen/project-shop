import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from './selectors';

CartFeature.propTypes = {
    
};

function CartFeature(props) {
    const cartTotal = useSelector(cartTotalSelector);
    console.log("cartTotal", cartTotal);

    return (
        <div>
            cart
        </div>
    );
}

export default CartFeature;