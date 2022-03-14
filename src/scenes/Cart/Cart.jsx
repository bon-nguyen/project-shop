import React from 'react';
import CartFeature from '../../features/Cart';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';


function Card(props) {
    return (
        <BaseLayout>
            <CartFeature />
        </BaseLayout>
    );
}

export default Card;