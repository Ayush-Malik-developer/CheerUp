import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Matchdesp } from '../shared/matchdesp';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-matchdetail',
  templateUrl: './matchdetail.component.html',
  styleUrls: ['./matchdetail.component.scss']
})
export class MatchdetailComponent implements OnInit {

  breakpoint : number ;
  point : number ;

  match : Matchdesp;
  selectedteam1 : string;
  selectedteam2 : string;

  
  constructor(private matchservice: MatchService,
    private route : ActivatedRoute,
    private location : Location) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 6 : 5;
    this.point = (window.innerWidth <= 400) ? 2 : 1;
    let id = this.route.snapshot.params['id'];
    this.match = this.matchservice.getMatch(id);
  }
  

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400)? 6 : 5;
    this.point = (event.target.innerWidth <= 400)? 2 : 1;
  }

  goBack(): void {
    this.location.back();
  }

  onSelect1(team : string) {
    this.selectedteam1 = team;
    this.selectedteam2 = null;
  }

  onSelect2(team : string) {
    this.selectedteam2 = team;
    this.selectedteam1 = null ;
  }

}
