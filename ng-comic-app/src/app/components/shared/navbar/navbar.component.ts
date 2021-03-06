import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino: string) {
    console.log('BUSCAR: ', termino);
    termino = termino.trim();
    if (termino === '') {
      this.router.navigate(['/heroes']);
    } else {
      this.router.navigate(['/heroes', 'search', termino]);
    }
  }

}
