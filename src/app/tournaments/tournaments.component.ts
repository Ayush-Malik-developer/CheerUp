import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { tournamentdesp } from '../shared/Tournamentdesp';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

  tournaments : tournamentdesp[];

  constructor(private tournamentservice : TournamentService) { }

  ngOnInit() {
    this.tournaments=this.tournamentservice.getTournaments();
  }

}
