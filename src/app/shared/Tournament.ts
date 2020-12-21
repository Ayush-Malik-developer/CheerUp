import {tournamentdesp} from './Tournamentdesp';

export const TOURNAMENTS : tournamentdesp[] = [
   {
       type : 'Knock-out',
       name : 'Kannauj Premier League',
       host : 'REC Kannauj',
       id : '1',
       start_date : 'Monday , Feb 06 , 2021',
       status : 'Ongoing',
       total_matches : 4,
       schedule : [
           {
            match_id : '1',
            strtdate : 'Monday , Feb 06 , 2021',
            t1 : 'CSE',
            t2 : 'CE' 
           },
           {
            match_id : '2',
            strtdate : 'Tuesday , Feb 07 , 2021',
            t1 : 'EL',
            t2 : 'EE'  
           },
           {
            match_id : '3',
            strtdate : 'Monday , Feb 08 , 2021',
            t1 : 'CSE',
            t2 : 'EE' 
           },
           {
            match_id : '4',
            strtdate : 'Monday , Feb 08 , 2021',
            t1 : 'EL',
            t2 : 'CE' 
           }
       ]
   },
   {
    type : 'Knock-out',
    name : 'Tirwa Premier League',
    host : 'REC Kannauj',
    id : '2',
    start_date : 'Monday , March 16 , 2021',
    status : 'Ongoing',
    total_matches : 10,
    schedule : [ 
    ]
   },
   {
    type : 'Knock-out',
    name : 'Tirwa Premier League',
    host : 'REC Kannauj',
    id : '3',
    start_date : 'Monday , March 16 , 2021',
    status : 'Upcoming',
    total_matches : 10,
    schedule : [ 
    ]
   },
   {
    type : 'Knock-out',
    name : 'Tirwa Premier League',
    host : 'REC Kannauj',
    id : '4',
    start_date : 'Monday , March 16 , 2021',
    status : 'Over',
    total_matches : 10,
    schedule : [ 
    ]
   } 
]