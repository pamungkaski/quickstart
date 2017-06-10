import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2> My Heroes {{hero.name}} </h2>
    <div>
      <label>Name: </label><input [(ngModel)]="hero.name" placeholder="Name"/><br/>
      <button (click)="onClick(hero)"> Save </button>
    </div>
  `,
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: Guid.newGuid(),
    name: ''
  };
  static onClick(hero: Hero, db: AngularFireDatabase): void {
    const itemObservable = db.object('/hero' + hero.id);
    itemObservable.set({ name: hero.name});
  }
}
export class Hero {
  id: string;
  name: string;
}
class Guid {
  r:number;
  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }
}
