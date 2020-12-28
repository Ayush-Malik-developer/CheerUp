import {Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog , MatDialogRef } from '@angular/material';

import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { sign_up } from '../shared/signupform';

import { MustMatch } from '../shared/mustmatch_validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})



export class SignupComponent implements OnInit {

  @ViewChild('sform') signupFormDirective;

  signupform : FormGroup;
  signup : sign_up;


  constructor(private dialogRef : MatDialogRef<SignupComponent>,
    private fb : FormBuilder) {
      this.createForm();
     }

  ngOnInit() {
  }

  onSubmit() {
    this.signup=this.signupform.value;
    console.log(this.signup);
    this.signupform.reset({
      firstname: '',
      lastname: '', 
      email : '',
      password: '',
      confirmpassword:''
    });
    this.signupFormDirective.resetForm();
    this.dialogRef.close();
  }

  createForm() {
    this.signupform=this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email : ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    }, { validator : MustMatch('password','confirmpassword') }); 
    
  }

}
