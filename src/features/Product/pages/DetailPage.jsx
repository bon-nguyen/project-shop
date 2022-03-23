import React from 'react';
import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import ProductThumbnail from '../components/ProductThumbnail';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import useProductDetail from '../components/hooks/useProductDetail';
import ProductInfo from '../components/ProductInfo';
import AddToCartForm from '../components/AddToCartForm';
import ProductMenu from '../components/ProductMenu';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ProductDescription from '../components/ProductDescription';
import ProductAddtional from '../components/ProductAddtional';
import ProductReviews from '../components/ProductReviews';
import Preloader from '../../../components/UIElements/Preloader/Preloader';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Cart/cartSlice';


const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: theme.spacing(3),
    },

    left: {
        width: '400px',
        padding: theme.spacing(1.5),
        borderRight: `1px solid ${theme.palette.grey[300]}`,
    },

    right: {
        flex: '1 1 0',
        padding: theme.spacing(1.5),
    },

    paginationBox: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
    loading: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
    }

}));
function DetailPage(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {
        params: {productId},
        url
    } = useRouteMatch();
    const { product, loading } = useProductDetail(productId);

    if(loading){
        return <Box components={<Preloader />}></Box>
    }
    const handleAddCartSubmit = (formValue)=> {
        console.log("formValue", formValue);
        const action = addToCart({
            id: product.id,
            product,
            quantity: formValue.quantity,
        });

        dispatch(action)
    }

    return (
        <Box className={classes.root}>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className={classes.left}>
                            <ProductThumbnail product={{}} />
                        </Grid>
                        <Grid item className={classes.right}>
                            <ProductInfo product={product} />
                            <AddToCartForm onSubmit={handleAddCartSubmit} />
                        </Grid>
                    </Grid>
                </Paper>
                <ProductMenu />
                <Switch>
                    <Route exact path={url}>
                        <ProductDescription product={product} />
                    </Route>
                    <Route exact path={`${url}/addtional`}>
                        <ProductAddtional product={product} />
                    </Route>
                    <Route exact path={`${url}/reviews`}>
                        <ProductReviews product={product} />
                    </Route>
                </Switch>
            </Container>
        </Box>
    );
}

export default DetailPage;