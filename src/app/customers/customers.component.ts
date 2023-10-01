import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CustomerActions from './state/customer.action'
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit{
  customers: any;
  data:any;

  constructor(private store:Store<any>,private service:CustomerService){}
  ngOnInit(): void {
    this.store.dispatch(new CustomerActions.LoadCustomers())
    this.store.subscribe(state =>{
      console.log("stater",state)
      // this.customers = state.customers?.customer[0];
      this.customers=state.customers.customers
    })
    console.log("Customers",this.customers)

    this.service.getCustomers().subscribe(datas =>{
      this.data=datas
    })
    console.log("server",this.data)
  }
 

}
