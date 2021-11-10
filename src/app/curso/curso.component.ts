import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {listCursos, curso, calcularPromedio} from '../interfaces'

import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  formulario:FormGroup;
  constructor(public Form:FormBuilder, private router: Router) { 
    this.formulario=Form.group({
      nombre: ["", Validators.required],

      nota1 : ["", Validators.required],
      porcentaje1: ["", Validators.required],

      nota2 : ["", Validators.required],
      porcentaje2: ["", Validators.required],

      nota3 : ["", Validators.required],
      porcentaje3: ["", Validators.required],

      nota4 : ["", Validators.required],
      porcentaje4: ["", Validators.required],

      nota5 : ["", Validators.required],
      porcentaje5: ["", Validators.required],
    })
  }

  public i: number =4;


  ngOnInit(): void {
  }


  validacion() {
    let agregar: curso = {
      nombre:this.formulario.get('nombre')?.value,
      id: 0,
      nota1: parseFloat(this.formulario.get('nota1')?.value),
      porcentaje1: parseFloat(this.formulario.get('porcentaje1')?.value),
      nota2: parseFloat(this.formulario.get('nota2')?.value),
      porcentaje2: parseFloat(this.formulario.get('porcentaje2')?.value),
      nota3: parseFloat(this.formulario.get('nota3')?.value),
      porcentaje3: parseFloat(this.formulario.get('porcentaje3')?.value),
      nota4: parseFloat(this.formulario.get('nota4')?.value),
      porcentaje4: parseFloat(this.formulario.get('porcentaje4')?.value),
      nota5: parseFloat(this.formulario.get('nota5')?.value),
      porcentaje5: parseFloat(this.formulario.get('porcentaje5')?.value),
      promedio: 0,
    }
    agregar.promedio = calcularPromedio(agregar);
    agregar.id =  this.i;
    this.i++;
    listCursos.push(agregar);
    console.log("aquiiiii");
    this.router.navigate(['/']);  
    
  }

}
