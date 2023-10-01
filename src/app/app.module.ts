import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {StoreModule} from '@ngrx/store';
import { customerReducer} from './customers/state/customer.reducer';
import {EffectsModule} from '@ngrx/effects'
// import { CustomerEffect } from './customers/state/customer.effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { HttpClientModule } from  '@angular/common/http';
import { CustomerService } from './customers/customer.service';
import { CustomerEffect } from './customers/state/customer.effects';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({'customers':customerReducer}),//registering reducers,here customers
    //  refers to slice of state and custome reducer is the slice user
    HttpClientModule,
    EffectsModule.forRoot([CustomerEffect])
    
    // StoreModule.forFeature()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
