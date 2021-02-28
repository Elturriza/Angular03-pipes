import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContraseñaPipe implements PipeTransform {

  transform(value: string, activo:boolean=true): string {
    if(!activo){
      
      return '*'.repeat(value.length);
    }else{
      return value;
    }

  }

}
