import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Hola UWU';
  tasks = [
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Ver Angular',
    'Ver flutter',
  ];
  senal = signal('Edgar');
  person = {
    name: 'Edgar',
    edad: 24,
    disabled: true,
    img: 'https://w3schools.com/howto/img_avatar.png',
  };

  clickHandler() {
    alert('Hola UwU');
  }

  inputHandler(event: Event) {
    console.log(event);
  }
  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;

    this.senal.set(newValue);
    console.log(input.value);
  }
}
