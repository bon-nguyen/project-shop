import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import {STATIC_HOST, THUMBNAIL_PLACEHOLDER} from '../../../constants/index';

Product.propTypes = {
    product: PropTypes.object,
};

function Product({product}) {
    const thumbnail = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;
    return (
        <Box padding={1} >
            <Box padding={1} minHeight="215px">
                <img width="100%" src={thumbnail} alt={product.name} />
            </Box>
            <Typography variant="body2">{ product.name }</Typography>
            <Typography variant="body2" >
                <Box component="span" fontSize="16" fontWeight="700">
                    { new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
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