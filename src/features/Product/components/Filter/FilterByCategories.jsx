import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Box } from '@material-ui/core';
import categoryApi from '../../../../api/categoryApi';
import { makeStyles } from '@material-ui/core/styles';
FilterByCategories.propTypes = {
    onChange: PropTypes.func,
};

 
const useStyles = makeStyles( (theme) => ({
    root: {
        padding: theme.spacing(2),
    },
    menu:{
        padding: 0,
        margin: 0,
        listStyleType: 'none',


        '& > li': {
            marginTop: theme.spacing(1),
            transition: 'all .25s',

            '&:hover': {
                color: theme.palette.primary.dark,
                cursor: 'pointer',
            },
        }
    }
}))

function FilterByCategories({onChange}) {
    const classes = useStyles();
    const [categoryList, setCategoryList] = useState([]);

    const handleCategoryList = (category)=> {
        if(onChange){
            onChange(category.id);
        }
    }

    useEffect(()=>{
        (async () => {
            try {
                const list = await categoryApi.getAll();
                setCategoryList(list.map( x => ({
                    id: x.id,
                    name: x.name
                })));
            } catch (error) {
                console.log("Failt to featch category list", error);
            }
        })()
    },[]);
    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
            <ul className={classes.menu}>
                {categoryList.map((category) =>(
                    <li key={category.id} onClick={()=> handleCategoryList(category)}>
                        <Typography variant="body1">{category.name}</Typography>
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByCategories;