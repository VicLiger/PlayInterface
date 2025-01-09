import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-card',
  imports: [
    CommonModule
  ],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent implements OnInit{
  
  @Input() gameImage = ""

  optionsList  = [
    "Jogar",
    "Informações"
  ];
  
  ngOnInit(): void {

  }

  constructor() {
    
  }
}
