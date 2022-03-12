import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import {STATIC_HOST, THUMBNAIL_PLACEHOLDER} from '../../../constants/index';
import { useHistory } from 'react-router-dom';
import { formatPrice } from '../../../utils';

Product.propTypes = {
    product: PropTypes.object,
};

function Product({product}) {
    const history = useHistory();
    const thumbnail = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;
    const handleClick = () => {
        // Navigate to detail page : /products/:productId
        history.push(`/products/${product.id}`);
    }
    return (
        <Box padding={1}  onClick={handleClick}>
            <Box padding={1} minHeight="215px">
                <img width="100%" src={thumbnail} alt={product.name} />
            </Box>
            <Typography variant="body2">{ product.name }</Typography>
            <Typography variant="body2" >
                <Box component="span" fontSize="16" fontWeight="700">
                    { formatPrice(product.salePrice)}
                </Box>
                {product.promotionPercent > 0
                    ? ` -${product.promotionPercent}%`
                    : ''
                }
            </Typography>
        </Box>
    );
}

export default Product;