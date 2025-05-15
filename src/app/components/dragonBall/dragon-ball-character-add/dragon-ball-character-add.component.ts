import { Component, input, output, signal } from '@angular/core';
import { Characters } from '../../../interfaces/characters.interface';

@Component({
  selector: 'dragon-ball-character-add',
  imports: [],
  templateUrl: './dragon-ball-character-add.component.html',
})
export class dragonBallCharacterAddComponent {
  
  name = signal('');
  power = signal(0);

  newCharacter =  output<Characters>();

  addCharacter(){
    console.log(this.name(), this.power());
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }

    const newCharacter: Characters = {

      //id: this.characters().length +1,
      id:Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),

    };

    //this.characters.update((list)=> [...list, newCharacter]);
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }

}
