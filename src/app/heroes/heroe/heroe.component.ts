import {Component } from '@angular/core'
@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'ironman';
    edad: number = 45;

    get NombreHeroe(): string {
        return this.nombre.toUpperCase()
    }

    obtenerNomber(): string{
        return `${this.nombre}-${this.edad}`
    }

    cambiarNombre(): void{
        this.nombre = 'spiderman';
    }

    cambiarEdad(): void{
        console.log("hey")
        this.edad = 30;
    }

}