import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template:`
      <h1>{{title}}</h1>
      <h2>{{hero.name}} details!</h2>
      <div><label> id: </label>{{hero.id}}</div>
      <div>
        <label> name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
      `
})
export class AppComponent {
  // we've added two properties title and hero that belongs to Hero class
  title = 'Tour of Heroes';

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}

export class Hero {
  // create a class with properties
  id: number;
  name: string;
}
