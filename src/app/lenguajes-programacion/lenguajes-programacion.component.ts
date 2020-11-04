import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { LenguajeProgramacion } from '../_models/lenguaje-programacion';

@Component({
  selector: 'app-lenguajes-programacion',
  templateUrl: './lenguajes-programacion.component.html',
  styleUrls: ['./lenguajes-programacion.component.css']
})
export class LenguajesProgramacionComponent implements OnInit {
  @Input() lenguaje: LenguajeProgramacion;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  constructor() { }

  ngOnInit(): void {
  }

}
