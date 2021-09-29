import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  mensajeSinResultados: string = '';

  constructor(private heroesService: HeroesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarHeroes();
  }

  verHeroe(id: number) {
    this.router.navigate(['/heroes', id]);
  }

  cargarHeroes() {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.has('texto')) {
        const texto = params.get('texto');
        this.heroes = this.heroesService.buscarHeroes(texto);
        this.mensajeSinResultados = `No se encontraron resultados para la busqueda "${texto}".`;
      } else {
        this.heroes = this.heroesService.getHeroes();
        this.mensajeSinResultados = `No se encontraron resultados.`;
      }
      // console.log("Heroes: ", this.heroes);
      // console.log("Heroes: ", JSON.stringify(this.heroes));
    });
  }

}
