import {createStore,combineReducers} from "redux";    //it used to combine the reducer and dispatch
const initialState = {
    balance:0,
    fullname:"",
    mobile:null,
}

function accountReducer(state=initialState,action){
    //full explanation
    // if (action.type == "deposit") {
    //     return {...state,balance:state.balance + action.payload}
    // }
    // else if (action.type == "withdraw") {
    //     return {...state,balance:state.balance - action.payload}
    // }
    // else if (action.type == "fullname") {
    //     return {...state,fullname:action.payload}
    // }
    // else if (action.type == "mobile") {
    //     return {...state,mobile:action.payload}
    // }
    // else
    // return state  //this is mandotary

    //using redux
    switch (action.type){
        case "deposit":
            return {...state,balance:state.balance + +action.payload};
        
        case "withdraw":
            return {...state,balance:state.balance - +action.payload};
        
        case "fullname":
            return {...state,fullname:action.payload}
        
        case "mobile":
            return {...state,mobile:action.payload}

        case "reset":
            return initialState
        
        default:
            return state  //this is mandotary
    }



}

function transanctionReducer(state=[],action){
    switch(action.type){
        case "ADD_TRANSACTION":
            return [...state,{id:action.payload.id,amount:action.payload.amount,type:action.payload.type,time:action.payload.time}]
        case "reset":
            return []
        default:
            return state
    }
}

let rootReducer = combineReducers(
    {
        account:accountReducer,
        transanction:transanctionReducer
    }
)


// dispatch({type:"deposit",payload:1000})
// dispatch({type:"withdraw",payload:1000})
// dispatch({type:"mobileUpdate",payload:1000})

const store = createStore(rootReducer)

// console.log(store.getState())                    //getState()  = current state
// store.dispatch({type:"deposit",payload:1000})
// store.dispatch({type:"withdraw",payload:100})
// store.dispatch({type:"fullname",payload:"Bhaskar"})
// store.dispatch({type:"mobile",payload:6303431098})
// console.log(store.getState())    

export default store;