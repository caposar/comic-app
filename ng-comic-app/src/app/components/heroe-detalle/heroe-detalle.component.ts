import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';


@Component({
  selector: 'app-heroe-detalle',
  templateUrl: './heroe-detalle.component.html',
  styleUrls: ['./heroe-detalle.component.css']
})
export class HeroeDetalleComponent implements OnInit {

  heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.has('id')) {
        const id = params.get('id');   
        this.heroe = this.heroesService.getHeroe(id);
        console.log(this.heroe);
      }
    });
  }

}
