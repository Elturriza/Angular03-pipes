import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string='Capitán América';
  nombre2:string='gaBRiel TurRIza';
  personajes: string[] = ['Ironman','Spiderman','Thor','Loki','Groot'];
  PI:number=Math.PI;
  porcentaje:number=0.234;
  salario:number=1234.5;
  fecha:Date=new Date();
  activar:boolean=true;
  idioma:string= 'es';
  videoUrl:string="https://www.youtube.com/embed/GdIh5W5JcVE";

  valorPromesa= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('llego la data');//reject('llego la data');no aparecera nada
    },4500);
  });
  heroe={
    nombre:'Logan',
    clave:'Wolverine',
    edad: 500,
    direccion:{
      calle:'primera',
      casa:20
    }
  }
}
