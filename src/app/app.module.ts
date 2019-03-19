import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';
import { TempComponent } from './temp/temp.component';
import {RentalModule} from './rental/rental.module';
import {LoginComponent} from './login/login.component';
import {ProductComponent} from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { StockComponent } from './stock/stock.component';
import { StocklistComponent } from './stock/stocklist/stocklist.component'



const routes: Routes =[
  {path: '', redirectTo:'/rentals',pathMatch: 'full'},
  {path: 'temp', component:TempComponent},
  {path: 'login', component:LoginComponent},
  {path: 'stock', component:StockComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  LoginComponent,
    TempComponent,
    ProductComponent,
    ProductListComponent,
    StockComponent,
    StocklistComponent

  
    
    
  ],
  imports: [
    BrowserModule,  RentalModule,
    RouterModule.forRoot(routes),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
