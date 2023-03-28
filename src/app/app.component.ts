import { Component } from '@angular/core';

import {product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'janeth';
  age = 30;
  img = 'https://img.freepik.com/foto-gratis/primer-disparo-flor-morada_181624-25863.jpg?w=2000';
  btnDisabled = true;
  person = {
  name: 'janeth',
  age: 30,
  avatar:'https://img.freepik.com/foto-gratis/primer-disparo-flor-morada_181624-25863.jpg?w=2000'
}
names:string[] = ['nicolas', 'julio','santi'];
newName = '';
products:product[] = [
  {
    name:'el mejor juguete',
    price:565,
    image: './assets/images/toy.jpg',
    category:'all'
},
{
  name:'La mejor bici',
  price:1245,
  image: './assets/images/bici.jpg'
},
{
  name:'Collecion de albumnes',
  price:800,
  image: './assets/images/collection album.jpg'
},
{
  name:'Mis libros',
  price:252,
  image: './assets/images/libros.jpg'
},
{
  name:'Casita',
  price:650,
  image: './assets/images/house.jpg'
},
{
  name:'Gafas',
  price:400,
  image: './assets/images/glasses.jpg'
},

]


toggleButton  () {
   this.btnDisabled= !this.btnDisabled;
}

increaseAge() {
  this.person.age += 1;
}

onScroll(event:Event){
  const element = event.target as HTMLElement;
  console.log(element.scrollTop);
}

changeName(event:Event) {
  const element = event.target as HTMLInputElement;
  this.person.name = element.value;
}

addName(){
  this.names.push(this.newName);
  this.newName = '';
}

deleteName(index: number){
  this.names.splice(index, 1);
}

}


