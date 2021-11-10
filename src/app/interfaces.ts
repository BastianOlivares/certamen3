export interface curso {
    nombre:string;
    id:number;
    promedio:number; 

    nota1: number;
    porcentaje1: number;

    nota2: number;
    porcentaje2: number;

    nota3: number;
    porcentaje3: number;

    nota4: number;
    porcentaje4: number;

    nota5: number;
    porcentaje5: number;
}

export let listCursos:curso[]= [
    {
      nombre:'Física',
      id:0,
      promedio: 6.7,
      nota1: 6.7,
      porcentaje1: 20,
      nota2: 6.7,
      porcentaje2: 20,
      nota3: 6.7,
      porcentaje3: 20,
      nota4: 6.7,
      porcentaje4: 20,
      nota5: 6.7,
      porcentaje5: 20,
    },

    {
      nombre:'Matemáticas',
      id:1,
      promedio: 5.0,
      nota1: 5.0,
      porcentaje1: 20,
      nota2: 5.0,
      porcentaje2: 20,
      nota3: 5.0,
      porcentaje3: 20,
      nota4: 5.0,
      porcentaje4: 20,
      nota5: 5.0,
      porcentaje5: 20,
    },

    {
      nombre:'Programación',
      id:2,
      promedio: 3.0,
      nota1: 3.0,
      porcentaje1: 20,
      nota2: 3.0,
      porcentaje2: 20,
      nota3: 3.0,
      porcentaje3: 20,
      nota4: 3.0,
      porcentaje4: 20,
      nota5: 3.0,
      porcentaje5: 20,
    },

    {
      nombre:'Ingeniería Web',
      id:3,
      promedio: 6.9,
      nota1: 6.9,
      porcentaje1: 20,
      nota2: 6.9,
      porcentaje2: 20,
      nota3: 6.9,
      porcentaje3: 20,
      nota4: 6.9,
      porcentaje4: 20,
      nota5: 6.9,
      porcentaje5: 20,
    }

];

export function calcularPromedio (objeto:curso) {
  return (objeto.nota1*objeto.porcentaje1 + objeto.nota2*objeto.porcentaje2 + objeto.nota3*objeto.porcentaje3 + objeto.nota4*objeto.porcentaje4 + objeto.nota5*objeto.porcentaje5)/100;
}