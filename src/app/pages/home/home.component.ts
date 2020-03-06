import { Component, OnInit } from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // titulo com nome e cargo
    trigger('titulo', [
      state('inicial', style({
        fontSize: '1em'
      })),
      state('maior', style({
        fontSize: '1.15em'
      })),
      transition('inicial <=> maior', [
        animate('100ms')
      ])
    ]),
  ]
})
export class HomeComponent implements OnInit {

  // Estados das animações
  estadoTitulo: string = 'inicial';
  estadoCategorias: string = 'inicial';

  constructor() { }

  ngOnInit(): void {
  }

  mudaEstadoTitulo() {
    this.estadoTitulo = 'maior';
  }

  removeEstadoTitulo() {
    this.estadoTitulo = 'inicial';
  }

}
