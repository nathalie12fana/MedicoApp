import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ModifierAudienceComponent } from './modifier-audience/modifier-audience.component';
import { PrintReservationComponent } from './print-reservation/print-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateReservationComponent,
    ListeReservationComponent,
    RegisterComponent,
    LoginComponent,
    ModifierAudienceComponent,
    PrintReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'creer-reservation', component:CreateReservationComponent },
      {path: 'liste-reservation', component:ListeReservationComponent },
      {path: '', component:LoginComponent },
      {path: 'register', component:RegisterComponent },
      {path: 'modifier-audience', component:ModifierAudienceComponent },
      {path: 'print-reservation', component:PrintReservationComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
