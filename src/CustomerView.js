import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deleteCustomer } from './slices/customerSlice'
export default function CustomerView(){
    const customers=useSelector((state)=>state.customers)
    const dispatch=useDispatch()
    function deleteHandler(id){
            dispatch(deleteCustomer(id));
    }
    return <div>
        <h3>Customer</h3>
        <ul style={{listStyle:'none'}}>
        {customers.map((name,id)=>  <li>{name} <button onClick={()=>deleteHandler(id)}>Delete</button> </li>  )}
    
        </ul>
    </div>
}