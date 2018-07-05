import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROS} from '../mock-heros';

import {HeroService} from '../hero.service';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

//  hero = 'Windstorm';
  /* peoperties used in x.html */
//  heros = HEROS;/* 使用服务*/
  heros:Hero[];
  hero:Hero = {
    id:1,
    name:'windstorm'
  }

  selectedHero:Hero;

  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }

  constructor(private heroService:HeroService) {

  }

  getHeros():void{
    this.heroService.getHeros().subscribe(heros => this.heros = heros);/* Observable 使用的写法 否则直接 this.heros=xxx */
  }

  ngOnInit() {
    this.getHeros();
  }

}
