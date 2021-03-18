import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../services/user.service';
import { sign_up } from '../shared/signupform';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  user : sign_up;

  constructor(private route : ActivatedRoute,
    private location : Location,
    private userservice : UserService) {}

  ngOnInit() {
    let email = this.route.snapshot.params['email'];
    let password = this.route.snapshot.params['password'];
    this.user = this.userservice.getUser(email,password);
  }

}
