// for creating strongly typed actions
import { Action } from "@ngrx/store";
import { Customer } from "../customer.model";

export enum CustomerActionTypes{
    LOAD_CUSTOMER="[Customer] Load Customers",
    LOAD_CUSTOMER_SUCCES = "[Customer] Load Customers Success",
    LOAD_CUSTOMER_FAIL = "[Customer] Load Customers Fail"
}

// creating actions using action creaters
export class LoadCustomers implements Action{
    readonly type=CustomerActionTypes.LOAD_CUSTOMER;
}
export class LoadCustomersSuccess implements Action{
    readonly type=CustomerActionTypes.LOAD_CUSTOMER_SUCCES;
    constructor(public payload:Customer[]){}
}
export class LoadCustomersFail implements Action{
    readonly type=CustomerActionTypes.LOAD_CUSTOMER_FAIL;
    constructor(public payload:string){}
}
export type Actions = LoadCustomers|LoadCustomersSuccess|LoadCustomersFail