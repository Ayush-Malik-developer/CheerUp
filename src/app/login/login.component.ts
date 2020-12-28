import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogRef } from '@angular/material';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {email: '', password: '', remember: false};

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    public dialog : MatDialog) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('User:',this.user);
    this.dialogRef.close();
  }

  openSignupForm() {
    this.dialog.open(SignupComponent, {width: '500px', height: '450px'});
  }


}
