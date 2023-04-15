import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/action/counterAction';
const Counter=()=>{
    const count= useSelector((state)=>state.count);
    const dispatch=useDispatch();
   
    
    const handleIncrement=()=>{
        dispatch(incrementCounter())
       
    }
    const handleReset=()=>{
        dispatch(resetCounter())
       
    }
    const handleDecrement=()=>{
        dispatch(decrementCounter())
       
    }
    return(
        <div>
            <h3>count : {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleDecrement}>decrement</button>
        </div>
    )
}
export default Counter;