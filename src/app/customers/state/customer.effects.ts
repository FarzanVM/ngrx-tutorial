import { Injectable } from "@angular/core";
import {Actions,createEffect,ofType} from '@ngrx/effects';
import { Action } from "@ngrx/store";
import {Observable,of }from 'rxjs'
import {map,mergeMap,catchError} from 'rxjs/operators';
import { Customer } from "../customer.model";
import * as CustomerAction from './customer.action'
import { CustomerService } from "../customer.service";
import { CustomerActionTypes } from "./customer.action";
@Injectable()
export class CustomerEffect{
    // injecting action from the store so we can listen to them and customerservice
    constructor(
        private actions$:Actions,
        private customerservice:CustomerService
    ){}

    // now to registering effect
    // @Effect()
        loadcustomer$:Observable<Action> =createEffect(()=>this.actions$.pipe(
            ofType<CustomerAction.LoadCustomers>(
                CustomerAction.CustomerActionTypes.LOAD_CUSTOMER
            ),
            mergeMap((actions:CustomerAction.LoadCustomers) =>this.customerservice.getCustomers().pipe(
                map((customers: Customer[]) => {
                       return new CustomerAction.LoadCustomersSuccess(customers);
                    }
                ),
                catchError(err => of(new CustomerAction.LoadCustomersFail(err)))
            ))
        )) 
}