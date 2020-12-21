import { Injectable } from '@angular/core';
import { tournamentdesp } from '../shared/Tournamentdesp';
import { TOURNAMENTS } from '../shared/Tournament';
import { Matchdesp } from '../shared/matchdesp';
import { MATCHES } from '../shared/Matches';


@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor() { }

  getTourn_schedule( id : string) : tournamentdesp {
    return TOURNAMENTS.filter((tournament) => (tournament.id === id))[0];
  }

  getTournaments() : tournamentdesp[] {
    return TOURNAMENTS;
  }
}
