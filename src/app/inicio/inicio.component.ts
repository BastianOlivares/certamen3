import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {listCursos, curso} from '../interfaces'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  
  listaCursos = listCursos;
  mostrarFormulario: Boolean = false;
  cursoObjetivo?:curso;
  
  formularioMod:FormGroup;
  constructor(public Form:FormBuilder) { 
    this.formularioMod=Form.group({
      nombre: ["", Validators.required],

      nota1 : ["", Validators.required],
      porcentaje1: ["", Validators.required],

      nota2 : ["", Validators.required],
      porcentaje2: ["", Validators.required],

      nota3 : ["", Validators.required],
      porcentaje3: ["", Validators.required],

      nota4 : ["", Validators.required],
      porcentaje4:
       ["", Validators.required],

      nota5 : ["", Validators.required],
      porcentaje5: ["", Validators.required],
    })
  }

  ngOnInit(): void {
  }

  mostrarForm(objeto:any) {
    this.cursoObjetivo = objeto;
    this.mostrarFormulario = true;
    
  }

  dejarMostrarFormn() {
    this.mostrarFormulario = false;
  }

  modificarDatos() {
    
    
    this.mostrarFormulario = false;
  }

  

}
