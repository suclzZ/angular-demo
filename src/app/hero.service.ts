import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {Hero} from './hero';
import {HEROS} from './mock-heros';

import {MessageService} from './message.service';

@Injectable(/*{ providedIn: 'root'}*/)
export class HeroService {

  constructor(private messageService:MessageService) { }

  getHeros():Observable<Hero[]> { /*  Observable of */
    console.info(this.messageService)
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROS);
  }
}
