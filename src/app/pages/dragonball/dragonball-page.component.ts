import { Component, signal } from '@angular/core';

interface Characters{
  id:number;
  name: string;
  power: number;
}

@Component({
  selector: 'dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {

  public characters = signal<Characters[]>([
    { id: 1, name: 'Gohan', power :11000 },
    { id: 2, name: 'Krillin', power :8000 },
    { id: 3, name: 'Bulma', power :100 },
  ]);
}
