import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonBall/character-list/character-list.component';
import { dragonBallCharacterAddComponent } from '../../components/dragonBall/dragon-ball-character-add/dragon-ball-character-add.component';
import { DragonballSerivice } from '../../services/dragonball.service';


@Component({
  selector: 'dragonball-super',
  imports: [CharacterListComponent, dragonBallCharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponent {
  

  public dragonballService = inject(DragonballSerivice);
  
}
