import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  private baseUrl ='https://dog.ceo/api/breeds/image/random';
  constructor( private http: HttpClient) {
    console.log("estoy en mis mascotas 2");
  }
  obtenerImagen(nombre: string, edad: number){
    console.log("imagen", nombre, edad)
  }
  getImage(){
    return this.http.get(this.baseUrl);
  }

}
