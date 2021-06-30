import React ,{useReducer, createContext} from 'react'

import contextReducer from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":75, "category":"House", "type":"Expense","date":"2020-12-22","id":"35"}]

export const ExpenseTrackerContext = createContext(initialState)


export const Provider =({children})=>{

    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    const deleteTransaction = (id)=>{
        dispatch({type: 'DELETE_TRANSACTION', payload: id})
    }

    const addTransaction = (transaction)=>{
        dispatch({type: 'ADD_TRANSACTION', payload: transaction})
    }

    // console.log(transactions)

    const balance = transactions.reduce((acc, currval)=> {
        return  (currval.type === 'Expense'? acc-currval.amount: acc + currval.amount)
    },0)

    return(
        <ExpenseTrackerContext.Provider value={{deleteTransaction, addTransaction, transactions, balance}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}
