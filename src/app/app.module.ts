import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import  'hammerjs'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatchdetailComponent } from './matchdetail/matchdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { ContactComponent } from './contact/contact.component';


import { AppRoutingModule } from './app-routing/app-routing.module';
import { TournScheduleComponent } from './tourn-schedule/tourn-schedule.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';

import { MatchService } from './services/match.service';
import { TournamentService } from './services/tournament.service';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatchdetailComponent,
    HeaderComponent,
    FooterComponent,
    ScheduleComponent,
    TournamentsComponent,
    ContactComponent,
    TournScheduleComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MatchService,
    TournamentService,
    UserService],
  entryComponents: [
    LoginComponent,
    SignupComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
