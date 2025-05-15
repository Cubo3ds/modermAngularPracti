
import { effect, Injectable, signal } from "@angular/core";
import { Characters } from "../interfaces/characters.interface";


const loadFromLocalStorage = () : Characters[] =>
    {   
        const characters = localStorage.getItem('characters');
        return characters ? JSON.parse(characters):[];
    };

@Injectable({providedIn:'root'})
export class DragonballSerivice{

    characters = signal<Characters[]>(loadFromLocalStorage());
    
    saveToLocalStorage = effect(()=>{
        //console.log(`Character count ${this.characters().length}`);
        localStorage.setItem('characters', JSON.stringify(this.characters()));
    });

    addCharacter(character: Characters){
        this.characters.update((list)=> [... list, character]);
    }
    
}