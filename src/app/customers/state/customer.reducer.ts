// for strongly typed actions
import * as CustomerActions from './customer.action';
import * as fromRoot from '../../state/app-state';
import { Customer } from '../customer.model';

// for using slectors
import {createSelector,createFeatureSelector } from '@ngrx/store';


export interface CustomerState{
    customers:Customer[],
    loading:boolean,
    loaded:boolean,
    error:string
}

export interface AppsState extends fromRoot.AppsState{
    customers:CustomerState
}

export const initialState :CustomerState={
    customers:[{
                    name:"farzan",
                    phone:"123243445",
                    address:"gokurama",
                    id:1
                }],
    loading:false,
    loaded:false,
    error:""
}

export function customerReducer(state=initialState,action:CustomerActions.Actions):CustomerState{
    switch(action.type)
    {
        case CustomerActions.CustomerActionTypes.LOAD_CUSTOMER:{
            console.log("here1")
            return {
                ...state,
                loading:true
            }
        }
        case CustomerActions.CustomerActionTypes.LOAD_CUSTOMER_SUCCES:{
            console.log("here2")
            return {
                ...state,
                loading:false,
                loaded:true,
                customers:action.payload
            }
        }
        case CustomerActions.CustomerActionTypes.LOAD_CUSTOMER_FAIL:{
            console.log("here3")
            return{
                ...state,
                customers:[],
                loaded:false,
                loading:false,
                error:action.payload  
            }
        }
        default:{
            return state
        }

}
}
// for creating selectors that can communicate with components component name customerlist

// creating feature selector for a customer slice of a state
const getCustomerFeatureState = createFeatureSelector<CustomerState>("customers")

// create selectors for properties we want
export const getCustomers = createSelector(
    getCustomerFeatureState ,//feature state we defined
    (state:CustomerState)=>state.customers //property we want to access
)
export const getCustomersLoading = createSelector(
    getCustomerFeatureState ,//feature state we defined
    (state:CustomerState)=>state.loading //property we want to access
)
export const getCustomersLoaded = createSelector(
    getCustomerFeatureState ,//feature state we defined
    (state:CustomerState)=>state.loaded //property we want to access
)
export const getCustomersError = createSelector(
    getCustomerFeatureState ,//feature state we defined
    (state:CustomerState)=>state.error //property we want to access
)




// for weakly typed actions
// const initialState = {
//     customer:[
//         {
//             name:"farzan",
//             phone:"123243445",
//             address:"gokurama",
//             id:1
//         }
//     ],
//     loading:true,
//     loaded:false
// }

// export function customerReducer(state = initialState,action:any){
//     switch(action){
//         case 'LOAD_CUSTOMER':{
//             return {
//                 ...state,
//                 loading:true,
//                 loaded:false
//             }
//         }
//         default:{
//             return state
//         }
//     }
// }
