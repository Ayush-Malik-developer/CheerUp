import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { MatchdetailComponent } from '../matchdetail/matchdetail.component';
import { ScheduleComponent } from '../schedule/schedule.component';
import { TournamentsComponent } from '../tournaments/tournaments.component';
import { ContactComponent } from '../contact/contact.component';

export const routes : Routes = [
    {path : 'home' , component : HomeComponent},
    {path : 'schedule', component : ScheduleComponent},
    {path : 'tournaments', component : TournamentsComponent},
    {path : 'contact', component : ContactComponent},
    {path : 'matchdetail/:id', component : MatchdetailComponent},
    {path : '', redirectTo : '/home', pathMatch: 'full'}
];