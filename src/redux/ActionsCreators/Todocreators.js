import React from 'react'
import { ADDTOLIST, DELETE, EDIT } from '../Actions/TodoActions'

export const add_to_list = (item) =>{
    return {
        type: ADDTOLIST,
        payload: item
    }
}

export const delete_from_list = (item_id) =>{
    return{ 
        type: DELETE,
        payload: item_id
    }
}

export const edit = (edititem) =>{
    return{
        type: EDIT,
        payload: edititem
    }
}