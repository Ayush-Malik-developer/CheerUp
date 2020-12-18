import { Component, OnInit } from '@angular/core';
import { Matchdesp } from '../shared/matchdesp';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  matches: Matchdesp[];

  constructor(private matchservice : MatchService) { }

  ngOnInit() {
    this.matches = this.matchservice.getMatches();
  }

}
