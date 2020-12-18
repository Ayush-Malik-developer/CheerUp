import {Batsman,Bowler,fall_wickets,play_11,extras} from './playersdesp';

export class Matchdesp {
    id : string;
    team1: string;
    team2: string;
    t1runs: number;
    t1wickets: number;
    t1overs: number;
    t2runs: number;
    t2wickets: number;
    t2overs: number;
    tournament: string;
    place: string;
    image: string;
    status : string;
    t1batsmans: Batsman[];
    t1bowlers: Bowler[];
    t1_fall_wc: fall_wickets[];
    t2batsmans: Batsman[];
    t2bowlers: Bowler[];
    t2_fall_wc: fall_wickets[];
    t1_extras : extras ;
    t2_extras : extras ;
    date : string ;
    time : string ;
    umpires : string ;
    toss : string ;
    t1_11 : play_11 ;
    t2_11 : play_11 ;
}