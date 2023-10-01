import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  {
    path:'',
    component:CustomersComponent
  },
  {
    path:'customerlist',
    component:CustomerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
