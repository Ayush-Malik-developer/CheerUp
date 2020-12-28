import { Component, OnInit } from '@angular/core';
import { Matchdesp } from '../shared/matchdesp';
import { MatchService } from '../services/match.service';
import { MatDialog , MatDialogRef } from '@angular/material';
import {LoginComponent} from '../login/login.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private matchservice : MatchService,
    public dialog : MatDialog) { }

  matches : Matchdesp[];
  selectedmatch : Matchdesp;

  openForm() {

  }

  ngOnInit() {
    this.matches = this.matchservice.getMatches();
  }

  conDition(status : string) : Boolean {
     if(status == 'upcoming')
      return false;
     else 
      return true;
  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

}
