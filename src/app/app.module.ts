import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 
import  'hammerjs'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatchdetailComponent } from './matchdetail/matchdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { ContactComponent } from './contact/contact.component';

import { MatchService } from './services/match.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { ScoreComponent } from './score/score.component';


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
    ScoreComponent
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
    AppRoutingModule
  ],
  providers: [MatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
