import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { tournamentdesp } from '../shared/Tournamentdesp';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tourn-schedule',
  templateUrl: './tourn-schedule.component.html',
  styleUrls: ['./tourn-schedule.component.scss']
})
export class TournScheduleComponent implements OnInit {

  t_ment : tournamentdesp;

  constructor(private tournamentservice : TournamentService,
    private route : ActivatedRoute,
    private location : Location) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.t_ment = this.tournamentservice.getTourn_schedule(id);
  }

  goBack(): void {
    this.location.back();
  }

}
