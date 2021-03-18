import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogRef } from '@angular/material';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  point : number;

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
    this.point = (window.innerWidth <= 550) ? 1 : 2;
  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

  onResize(event) {
    this.point = (event.target.innerWidth <= 550)? 1 : 2;
  }

}
