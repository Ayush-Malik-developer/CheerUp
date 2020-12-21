import { Matchdesp } from './matchdesp';

export class tournamentdesp {
    type : string;
    name : string;
    host : string;
    id : string;
    start_date : string;
    status : string;
    schedule : tourna_schedule[];
    total_matches : number;
}

export class tourna_schedule {
    match_id : string;
    strtdate : string ;
    t1 : string;
    t2 : string;
}