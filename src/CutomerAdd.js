import React,{useState} from "react";
import CustomerView from "./CustomerView";
import { addCustomer as addCustomerAction } from "./slices/customerSlice";
import { useDispatch } from "react-redux";
export default function CustomerAdd()
{   
    // const[customer,setCustomer]=useState([]);
    const [input,setInput]=useState("");
    const dispatch=useDispatch(); // it will show the action 
    function addCustomer()
    {
        if(input){
            // setCustomer((previousState)=>[...previousState,input])
            
            dispatch(addCustomerAction(input)); // its is just the actioncreator not the action .... So create the dispatch and sharing the data 
            setInput("");
        }
    }
    return <>

    <div>
        <h3>Add Customer</h3>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button  onClick={addCustomer}>Add</button>
    </div>
    {/* <CustomerView customer={customer}/> */}
  </>
    
    
    
}