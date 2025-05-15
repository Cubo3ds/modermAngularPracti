import { Component, Input, input } from '@angular/core';
import type { Characters } from '../../../interfaces/characters.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {

  characters = input.required<Characters[]>();

  @Input() 
  listName: string ='';

  
}
