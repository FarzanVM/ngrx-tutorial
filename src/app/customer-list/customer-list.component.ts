import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';
import {Observable} from 'rxjs'
import * as CustomerActions from '../customers/state/customer.action';
import * as fromCustomer from '../customers/state/customer.reducer';
import {Customer} from '../customers/customer.model';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit{
 
  // specifying customer is gonna be a type of observable of type customer Array
  customers$:Observable<Customer[]>;

  constructor(private store:Store<fromCustomer.AppsState>){}

  ngOnInit(): void {
    this.store.dispatch(new CustomerActions.LoadCustomers());
    // now subscribing to the selector we created before
    this.customers$ = this.store.pipe(select(fromCustomer.getCustomers))
    console.log("Customers",this.customers$)
    
  }

}
