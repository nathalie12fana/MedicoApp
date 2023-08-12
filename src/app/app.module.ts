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

@NgModule({
  declarations: [
    AppComponent,
    CreateReservationComponent,
    ListeReservationComponent,
    RegisterComponent,
    LoginComponent,
    ModifierAudienceComponent
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

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
