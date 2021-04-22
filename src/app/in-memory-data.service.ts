import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', score: 2 },
      { id: 12, name: 'Narco', score: 7 },
      { id: 13, name: 'Bombasto', score: 10 },
      { id: 14, name: 'Celeritas', score: 12 },
      { id: 15, name: 'Magneta', score: 4 },
      { id: 16, name: 'RubberMan', score: 15 },
      { id: 17, name: 'Dynama', score: 13 },
      { id: 18, name: 'Dr IQ', score: 11 },
      { id: 19, name: 'Magma', score: 16 },
      { id: 20, name: 'Tornado', score: 9 }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}