import { Injectable } from '@angular/core';
import { Matchdesp } from '../shared/matchdesp';
import { MATCHES } from '../shared/Matches';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor() { }

  getMatches() : Matchdesp[] {
    return MATCHES ;
  }

  getMatch(id : string ) : Matchdesp {
    return MATCHES.filter((match) => (match.id === id))[0];
  }
}
