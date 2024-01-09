import React from 'react'
import { useSelector } from 'react-redux'


const Account = () => {
    let data = useSelector((state)=> {
        return state
    })
    console.log(data)
    console.log(new Date())
  return (
    <div>
        <h1>ACCOUNT COMPONENT</h1>
        <center>
        <table border={1} cellPadding={5} cellSpacing={0.5}>
            <thead>
                <tr>
                    <th>S.NO</th>
                    <th>NAME</th>
                    <th>MOBILE</th>
                    <th>BALANCE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>*</td>
                    <td>{data.account.fullname}</td>
                    <td>{data.account.mobile}</td>
                    <td>{data.account.balance}</td>
                </tr>
            </tbody>
        </table>
        </center><br/><hr/>


        <h1>TRANSACTION DETAILS</h1>
        <center>
        <table border={1} cellPadding={5} cellSpacing={0.5}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>AMOUNT</th>
                    <th>TYPE</th>
                    <th>DATE</th>
                </tr>
            </thead>
            <tbody>
               
                {
                    data.transanction.map((tr,i) => (
                        <tr key={tr.id}>
                            <td>{tr.id}</td>
                            <td>{tr.amount}</td>
                            <td>{tr.type}</td>
                            <td>{tr.date}</td>
                            
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </center>
        
    </div>
  )
}

export default Account