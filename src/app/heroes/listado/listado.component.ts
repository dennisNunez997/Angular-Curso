import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

  heroes: string[]=['spiderman','ironman','hulk','thor'];
  heroesBorrados: string = '';
  //ngOnInit se utiliza para incializar servicios
  
  borrarHeroe(){
    this.heroesBorrados = this.heroes.shift() || ''
    
    
  }

}
