import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import FilterByCategories from './Filter/FilterByCategories';
import FilterByPrice from './Filter/FilterByPrice';
import FilterByService from './Filter/FilterByService';


ProductFilters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFilters({filters, onChange}) {

    const handleCategoryChange = (newCategoryId) => {
        if(!onChange) return;
        const newFilters = {
            "category.id": newCategoryId
        } 
        onChange(newFilters);
    }

    const handleFilterChange = (values)=>{
        if(onChange){
            onChange(values);
        }
    }
    return (
        <Box>
            <FilterByCategories onChange={handleCategoryChange} />
            <FilterByPrice onChange={handleFilterChange} />
            <FilterByService filters={filters} onChange={handleFilterChange} />
        </Box>
    );
}

export default ProductFilters;