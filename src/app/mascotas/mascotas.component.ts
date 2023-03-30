import { Component } from '@angular/core';
import { MascotasService } from '../mascotas.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']

})

export class MascotasComponent {
  public imageUrl = "https://images.dog.ceo/breeds/germanshepherd/n02106662_21432.jpg"
  constructor(private mascotasService: MascotasService){
    console.log("estoy en mis mascotas");
    this.mascotas("perro", 2)
    mascotasService.obtenerImagen("jjjj", 4)
    mascotasService.getImage().subscribe((data) => {
      console.log("sss", Object.values(data)[0])
      this.imageUrl = Object.values(data)[0];
    });
  }

  mascotas(nombre: string, edad: number){
    console.log("mascotas", nombre, edad)

    const persona1 = new Persona();
    persona1.setName("Horacio")
    persona1.setAge(29)

    const persona2 = new Persona();
    persona2.setName("Janeth")
    persona2.setAge(29)

    console.log(persona2.getName() + " tiene " + persona2.getAge() + " años")
  }

}


class Persona {
  private name: string;
  private age: number;

  constructor() {
    this.name = ""
    this.age = 18
  }

  public getName() {
    return this.name;
  }

  public getAge() {
    return this.age;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setAge(age: number) {
    this.age = age;
  }
}


