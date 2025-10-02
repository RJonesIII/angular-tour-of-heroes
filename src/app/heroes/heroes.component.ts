import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { NgFor } from '@angular/common';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  // standalone: true,
  // imports: [
  //   NgFor,
  // ]
})
export class HeroesComponent implements OnInit{

  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }


  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add('HeroesComponent: Selected hero id=${hero.id}');
  }



  

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  



}
