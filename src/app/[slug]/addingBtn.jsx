'use client'
import useStore from '@/app/store/store'
import { Button, IconButton } from '@mui/material';
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';

export default function AddingBtn({ product }) {
    const { addProduct, addingCondition, stock } = useStore();

    const status = stock(product.id)

    function addingProcess() {
        if (product.stock !== 0) {
            addProduct(JSON.stringify(product))
        } else {
            alert('This product is out of stock.')
        }

    }

    return (
        <Button
        disabled={status}
            onClick={() => addingProcess()}
            sx={{
                border:'1px solid black',
                display: 'flex',
                width: '100%', p: 2,
                color: 'black',
                transition: '0.4s',
                my: 3,
                fontWeight:700,
                ':hover':{
                    boxShadow:'0 0 20px 5px rgba(0,0,0,0.5)'
                }
            }}>
                <CheckIcon sx={{display:status ? 'flex' : 'none'}}/>
            ADD TO CART
        </Button>
    )
}
