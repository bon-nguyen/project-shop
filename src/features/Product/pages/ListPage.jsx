import React, { useEffect, useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box, Paper,  } from '@material-ui/core';
import productApi from '../../../api/productApi';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';
import { Pagination } from '@material-ui/lab';
import ProductSort from '../components/ProductSort';
import ProductFilters from '../components/ProductFilters';
import FilterViewer from '../components/Filter/FilterViewer';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {},

    left: {
        width: '250px',
    },

    right: {
        flex: '1 1 0',
    },

    paginationBox: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    }

}));

function ListPage(props) {
    const classes = useStyles();
    const history  = useHistory();
    const localtion = useLocation();
    const queryParams = useMemo(() => {
        const params = queryString.parse(localtion.search);
        return {
            ...params,
            _page: Number.parseInt(params._page) || 1,
            _limit: Number.parseInt(params._limit) || 12,
            _sort: params._sort || 'salePrice:ASC',
            isPromotion: params.isPromotion === 'true',
            isFreeShip: params.isFreeShip === 'true',
        }
    },[localtion.search]);
    // const queryParams = useMemo(() => {
    //     const params = queryString.parse(localtion.search);
    //     return {
    //         ...params,
    //         _page: Number.parseInt(params._page) || 1,
    //         _limit: Number.parseInt(params._limit) || 12,
    //         _sort: params._sort || 'salePrice:ASC',
    //         isPromotion: params.isPromotion === 'true',
    //         isFreeShip: params.isFreeShip === 'true',
    //     }
    // },[localtion.search]);

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination,  setPagination] = useState({
        limit: 12,
        total: 12,
        page: 1,
    });
    // const [filters, setFilters] = useState(() => ({
    //     ...queryParams,
    //     _page: Number.parseInt(queryParams._page) || 1,
    //     _limit: Number.parseInt(queryParams._limit) || 12,
    //     _sort: queryParams._sort || 'salePrice:ASC',
    // }));

    const handlePageChange = (e, page) => {
        // setFilters((prevFilters) => ({
        //     ...prevFilters,
        //     _page: page,
        // }));
        const filters = {
            ...queryParams,
            _page: page,
        }
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters),
        });
    }

    const handleSortChange = (newSortValue) => {
        // setFilters((prevFilters) => ({
        //     ...prevFilters,
        //     _sort: newSortValue,
        // }));
        const filters = {
            ...queryParams,
            _sort: newSortValue,
        }
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters),
        });
    }

    const handleFiltersChange = (newFilters) => {
        // setFilters((prevFilters) => ({
        //     ...prevFilters,
        //     ...newFilters
        // }));
        const filters = {
            ...queryParams,
            ...newFilters,
        }
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters),
        });
    }

    const setNewFilters = (newFilters) => {
        // setFilters(newFilters);
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(newFilters),
        });
    }

    // useEffect(()=>{
    //     // todo : Sync filters to URL
    //     history.push({
    //         pathname: history.location.pathname,
    //         search: queryString.stringify(filters)
    //     });
    // },[history,filters]);

    useEffect(()=>{
        ( async () =>{
            try {
                const { data, pagination } = await productApi.getAll(queryParams);
                setProductList(data);
                setPagination(pagination);
            } catch (error) {
                console.log("Failed to fetch product list", error);
            }
            setLoading(false);
        })();
    },[queryParams]);


    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <ProductFilters filters={queryParams} onChange={handleFiltersChange} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <ProductSort currentSort={queryParams._sort} onChange={handleSortChange}  />
                            <FilterViewer filters={queryParams} onChange={setNewFilters}/>
                            {
                                loading ? <ProductSkeletonList length={9} /> : <ProductList data={productList} />
                            }
                            <Box 
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                pt={2}
                                pb={1}
                            >
                                <Pagination 
                                    color="primary" 
                                    count={Math.ceil(pagination.total / pagination.limit)}
                                    page={pagination.page} 
                                    onChange={handlePageChange}
                                ></Pagination>
                            </Box>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;