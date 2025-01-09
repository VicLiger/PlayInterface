import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameCardComponent } from "../Components/game-card/game-card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GameCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PlaystationInterface';
}
