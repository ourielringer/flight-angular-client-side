import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsComponent } from './coms/tickets/tickets.component';

import { SearchComponent } from './coms/search/search.component';
import { FlightCompanyComponent } from './coms/flight-company/flight-company.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MymodulModule, DemoMaterialModule } from './mymodul/mymodul.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FindflightComponent } from './coms/findflight/findflight.component';
import { SinginComponent } from './coms/singin/singin.component';
import { SingupComponent } from './coms/singup/singup.component';
import { PassengerDetailsComponent } from './coms/passenger-details/passenger-details.component';
import { PaymentComponent } from './coms/payment/payment.component';
import { HttpClientModule } from '@angular/common/http';
import { PrivateAreaComponent } from './coms/private-area/private-area.component';
import { ChekinComponent } from './coms/chekin/chekin.component';
import { ManagementComponent } from './coms/management/management.component';



@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    SearchComponent,
    FlightCompanyComponent,
    FindflightComponent,
    SinginComponent,
    SingupComponent,
    PassengerDetailsComponent,
    PaymentComponent,
    PrivateAreaComponent,
    ChekinComponent,
    ManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    //  MymodulModule,
    DemoMaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
