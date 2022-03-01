import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    //para que no empiece a buscar enseguida
    //si esta vacio o es menor a tres retorna value
    if(arg === '') return value;
    //declaro una constante
    const resultList = [];
    //itero esta variable value que equivale a todos nuestros post iteramos sobre cada uno de ellos
    for(const list of value){
      //aqui compruebo si el titulo del posts se corresponde con el argumento que me pasa el usuario
      if(list.budgetName.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        //lo siguiente almacenar en el array el resultado de la búsqueda
        resultList.push(list);
      };
    };
    return resultList;
  }

}
