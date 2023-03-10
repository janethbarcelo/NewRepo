import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'janeth';
  age = 30;
  img = 'https://img.freepik.com/foto-gratis/primer-disparo-flor-morada_181624-25863.jpg?w=2000';
  btnDisabled = true;
  person = {
  name: 'janeth',
  age: 30,
  avatar:'https://img.freepik.com/foto-gratis/primer-disparo-flor-morada_181624-25863.jpg?w=2000'
}


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
}

