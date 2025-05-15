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

  name = signal('');
  power = signal(0);

  characters = signal<Characters[]>([
    { id: 1, name: 'Goku', power :11000 },
  ]);

  addCharacter(){
    console.log(this.name(), this.power());
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }

    const newCharacter: Characters = {

      id: this.characters().length +1,
      name: this.name(),
      power: this.power(),

    };

    this.characters.update((list)=> [...list, newCharacter]);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
