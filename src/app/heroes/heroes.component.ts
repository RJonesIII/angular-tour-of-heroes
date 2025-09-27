import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  // standalone: true,
  // imports: [
  //   NgFor,
  // ]
})
export class HeroesComponent {

  
  
  //hero = 'Windstorm';
  selectedHero?: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  heroes = HEROES;

}
