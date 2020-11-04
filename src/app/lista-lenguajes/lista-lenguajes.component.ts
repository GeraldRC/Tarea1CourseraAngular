import { Component, OnInit } from '@angular/core';
import { LenguajeProgramacion } from '../_models/lenguaje-programacion';

@Component({
  selector: 'app-lista-lenguajes',
  templateUrl: './lista-lenguajes.component.html',
  styleUrls: ['./lista-lenguajes.component.css']
})
export class ListaLenguajesComponent implements OnInit {
  lenguajes: LenguajeProgramacion[];
  constructor() {
    this.lenguajes = [];
  }

  ngOnInit(): void {
  }

  guardar(nombre: string, descripcion: string, image:string): boolean {
    this.lenguajes.push(new LenguajeProgramacion(nombre, descripcion, image));
    return false;
  }

}
