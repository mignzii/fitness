import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChoisirprogrammeComponent } from './choisirprogramme/choisirprogramme.component';
import { ProgrammeuniqueComponent } from './programmeunique/programmeunique.component';
import { SuiviComponent } from './suivi/suivi.component';
import { NavComponent } from './nav/nav.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ImcComponent } from './imc/imc.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgrammeuniqueComponent,
    SuiviComponent,
    NavComponent,
    CalendarComponent,
    ImcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
