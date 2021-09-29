import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Output() heroeId: EventEmitter<number>;

  constructor() {
    this.heroeId = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(id: number) {
    this.heroeId.emit(id);
  }

}
