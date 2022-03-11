import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

function ProductSort({currentSort, onChange}) {

    const handleSordChange = (event, newValue) => {
        if (onChange) onChange(newValue);
    }
    return (
        <Tabs
            indicatorColor="primary"
            textColor="primary"
            onChange={handleSordChange}
            aria-label="disabled tabs example"
            value={currentSort}
        >
            <Tab label="Giá từ thấp đến cao" value="salePrice:ASC"></Tab>
            <Tab label="Giá từ cao đến thấp" value="salePrice:DESC"></Tab>
        </Tabs>
    );
}

export default ProductSort;