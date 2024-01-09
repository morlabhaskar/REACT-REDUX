import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

const Form = () => {
    let dispatch = useDispatch();
    const [amount,setAmount] = useState('')
    const [name,setName] = useState()
    const [mobile,setMobile] = useState()
    const [transactionId,updateTransactionId] = useState(1)
    const changeHandler = (e)=> {
        let data = e.target.value;
        setAmount(data);
        
    }
    const namechangeHandler = (e) => {
        let namedata = e.target.value
        setName(namedata)
    }
    const mobilechangeHandler = (e) => {
        let mobiledata = e.target.value
        setMobile(mobiledata)
    }
    
    // const short = (amount) => {
    //     return {type:"deposit",payload:amount}      //this is used to   dispatch(short(amount))
    // }
    
  return (
    <div>
        <h1>FORM COMPONENT</h1>
        <input type='number' placeholder='Add Amount' value={amount} onChange={changeHandler} />
        <button onClick={()=>{
            dispatch({
                type:"deposit",
                payload:amount
            })
            
            dispatch({
                 type:"ADD_TRANSACTION",
                 payload:{
                    id:transactionId,
                    amount:amount,
                    date:new Date(),
                    // date: new Date().toLocaleString(),
                    type:"Credit",
            }})
            updateTransactionId(transactionId+1)

            // dispatch(short(amount))                  //this is efficient code by calling the short function
            setAmount("")
        }} >Deposit</button>

        
        <button onClick={()=>{
            dispatch({
                type:"withdraw",
                payload:amount
            })
            
            dispatch({
                type:"ADD_TRANSACTION",
                payload:{
                    id:transactionId,
                   amount:amount,
                   date:new Date(),
                // date: new Date().toLocaleString(),
                   type:"Debit",
           }})
           updateTransactionId(transactionId+1)
            setAmount("")
        }} >withdraw</button><br/>


        <input type='text' placeholder='Name' value={name} onChange={namechangeHandler} />
        <button onClick={()=>{
            dispatch({type:"fullname",payload:name})
            setName("")
        }} >Update</button><br/>

        <input type='number' placeholder='Mobile' value={mobile} onChange={mobilechangeHandler} />
        <button onClick={()=>{
            dispatch({type:"mobile",payload:mobile})
            setMobile("")
        }} >Update</button><br/>

        <button onClick={()=>{
            dispatch({type:"reset"})
        }} >Reset</button><br/><hr/>

    </div>
  )
}

export default Form