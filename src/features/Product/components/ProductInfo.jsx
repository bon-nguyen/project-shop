import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { formatPrice } from '../../../utils';

ProductInfo.propTypes = {
    product: PropTypes.object,
};

const useStyles = makeStyles( (theme) => ({
    root: {
        paddingBottom: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.grey[200]}`
        
    },

    description:{
        margin: theme.spacing(2),
    },

    priceBox: {
        background: theme.palette.grey[400],
        padding: theme.spacing(2),
    },

    salePrice: {
        fontSize: theme.typography.h4.fontSize,
        marginRight: theme.spacing(3),
        fontWeight: 'bold',
    },

    originalPrice: {
        marginRight: theme.spacing(2),
        textDecoration: 'line-through',
    },
    promotionPercent:{

    }
}))

function ProductInfo({product = {}}) {
    const classes = useStyles();
    const {name, shortDescription, salePrice, originalPrice, promotionPercent} = product;
    return (
        <Box paddding={1} className={classes.root}>
            <Typography component="h1" variant="h4">{name}</Typography>
            <Typography>{shortDescription}</Typography>

            <Box className={classes.priceBox}>
                <Box component="span" className={classes.salePrice}>{formatPrice(salePrice)}</Box>
                {promotionPercent > 0 && (
                    <>
                        <Box component="span" className={classes.originalPrice}>{formatPrice(originalPrice)}</Box>
                        <Box component="span" className={classes.promotionPercent}>{`-${promotionPercent}%`}</Box>
                    </>
                    )
                }
            </Box>
        </Box>
    );
}

export default ProductInfo;