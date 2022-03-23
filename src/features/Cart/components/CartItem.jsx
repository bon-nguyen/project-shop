import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useDispatch } from 'react-redux';

import { formatPrice } from '../../../utils';
import QuantityCartField from '../../../components/form-controls/QuantityCartField';
import { useForm } from 'react-hook-form';

import { setQuantity, removeFormCart } from '../cartSlice';
CartItem.propTypes = {
    product: PropTypes.object,
    quantity: PropTypes.number,
};



function CartItem({product = {}, quantity, id}) {
    console.log("product",product);
    console.log("quantity",quantity);
    console.log("id", id);
    const dispatch = useDispatch();

    const form = useForm({
        defaultValues:{
            quantity: quantity,
        },
        
    });
    const onChangeQuantity = async (formValue) =>{
        const action = await setQuantity({
            id: product.id,
            quantity: Number.parseInt(formValue.quantity),
        });
        dispatch(action);
    }
    const removeCartItem = async (id) =>{
        console.log("da click", id)
        const action = await removeFormCart({
            id: id,
        });
        dispatch(action);
    }
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {product.name}
            </TableCell>
            <TableCell align="right">{formatPrice(product.originalPrice)}</TableCell>
            <TableCell align="right">
                <form onChange={form.handleSubmit(onChangeQuantity)}>
                    <QuantityCartField name="quantity" form={form}/>
                </form>
            </TableCell>
            <TableCell align="right">
                {formatPrice(quantity * product.originalPrice)}
            </TableCell>
            <TableCell align="right" onClick={removeCartItem}><DeleteOutlineIcon color="error" /></TableCell>
        </TableRow>
    );
}

export default CartItem;