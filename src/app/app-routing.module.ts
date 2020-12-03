import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindflightComponent } from './coms/findflight/findflight.component';
import { SinginComponent } from './coms/singin/singin.component';
import { SearchComponent } from './coms/search/search.component';
import { SingupComponent } from './coms/singup/singup.component';
import { PassengerDetailsComponent } from './coms/passenger-details/passenger-details.component';
import { PaymentComponent } from './coms/payment/payment.component';
import { TicketsComponent } from './coms/tickets/tickets.component';
import { PrivateAreaComponent } from './coms/private-area/private-area.component';


const routes: Routes = [ 
   { path: 'search', component: SearchComponent },

   { path: 'singin', component: SinginComponent, },
   { path: 'singup', component: SingupComponent,},
   { path: 'details-passenger', component: PassengerDetailsComponent,},
   { path: 'Payment', component: PaymentComponent,},
   { path: 'ticket', component: TicketsComponent},
   { path: 'privateArea', component: PrivateAreaComponent},


//  canActivate(servic)

  { path: '',   redirectTo: '/search', pathMatch: 'full' },
// { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
