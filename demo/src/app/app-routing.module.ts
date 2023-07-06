import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoisirprogrammeComponent } from './choisirprogramme/choisirprogramme.component';
import { ProgrammeuniqueComponent } from './programmeunique/programmeunique.component';
import { SuiviComponent } from './suivi/suivi.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ImcComponent } from './imc/imc.component';

const routes: Routes = [
  {path:'allprogramme',component:ChoisirprogrammeComponent},
  {path:'programmeunique',component:ProgrammeuniqueComponent},
  {path:'suivi',component:SuiviComponent},
  {path:'calender',component:CalendarComponent},
  {path:'imc',component:ImcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
