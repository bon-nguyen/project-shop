import React from 'react';
import { useSelector } from 'react-redux';
import { cartTotalSelector, cartItemsCountSelector, cartItemsSelector } from './selectors';
import { Box, Container,Grid, Typography,Paper , makeStyles, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';
import cartEmpty from '../../assets/images/mascot@2x.png';
import { useHistory } from 'react-router-dom';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { formatPrice } from '../../utils';
import CartItem from './components/CartItem';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 'calc(100vh - 300px)',
    },
    title: {
        paddingBottom: theme.spacing(2),
    },
    paper:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '40px 20px',
    },
    text: {
        padding: theme.spacing(3),
    },
    left: {
        flex: '1 1 0',


    },
    right: {
        width: '400px',
        paddingLeft: '20px',

    },
    priceList:{
        listStyle: 'none',
        margin: '0',
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        padding: '17px 20px',

        '& > li': {
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            marginBottom: '10px'
        }
    },
    priceTotal:{
        padding: '17px 20px',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        margin: '0px',
        '& >h4': {
            color: 'red',
            fontSize: '22px',
            fontWeight: '400',
            textAlign: 'right',
        }
    }
}));
  

function CartFeature(props) {
    const classes = useStyles();
    const cartTotal = useSelector(cartTotalSelector);
    const cartItemsCount = useSelector(cartItemsCountSelector);
    const cartItems = useSelector(cartItemsSelector);

    const history = useHistory();

    console.log("cartTotal", cartTotal);
    console.log("cartItemsCount", cartItemsCount);
    console.log("cartItems", cartItems);


    if (cartItemsCount === 0) {
        return (
            <Box pt={4} pb={4} className={classes.root}>
                <Container>
                    <Typography variant="h6" className={classes.title}>GIỎ HÀNG</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <Paper elevation={0} className={classes.paper}>
                                <img src={cartEmpty} alt="Cart Empty" />
                                <Typography variant='h4' className={classes.text}>Không có sản phẩm nào trong giỏ hàng của bạn.</Typography>
                                <Button variant="contained" color="primary" onClick={() => history.push('/')}>
                                    Quay về trang chủ
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        )
    }

    return (

        <Box pt={4} pb={4} className={classes.root}>
            <Container>
                <Typography variant="h6" className={classes.title}>GIỎ HÀNG</Typography>
                <Grid container >
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <TableContainer>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Sản phẩm</TableCell>
                                            <TableCell align="right">Đơn giá</TableCell>
                                            <TableCell align="right">Số lượng</TableCell>
                                            <TableCell align="right">Thành tiền</TableCell>
                                            <TableCell align="right"><DeleteOutlineIcon /></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        { cartItems.map((item, index) => (
                                            <CartItem key={index} {...item} />
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <Box component='ul' className={classes.priceList}>
                                <li>
                                    <span className="prices__text">Tạm tính</span>
                                    <span className="prices__value">{formatPrice(cartTotal)}</span>
                                </li>
                            </Box>
                            <Box className={classes.priceTotal}>
                                <span>Tổng cộng:</span>
                                <Typography variant='h4'>{formatPrice(cartTotal)}</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default CartFeature;