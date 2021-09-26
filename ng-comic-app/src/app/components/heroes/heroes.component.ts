import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    console.log("Heroes: ", this.heroes);
    console.log("Heroes: ", JSON.stringify(this.heroes));
  }

}
