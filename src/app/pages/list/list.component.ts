import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno.model';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  alumnos: Alumno[] = [
    { nombre: "Juan", apellidos: "Pérez Gómez", DNI: "12345678A", Telefone: "612345678"},
    { nombre: "María", apellidos: "Rodríguez Sánchez", DNI: "87654321X.", Telefone: "678901234" },
    { nombre: "Carlos", apellidos: "Fernández Díaz", DNI: "11223344A", Telefone: "712345678" }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.alumnos);
  }

}
