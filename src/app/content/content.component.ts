import { Component, OnInit, NgModule, Input } from '@angular/core';
import { Die } from '../models/die';
import { Game } from '../models/game';





@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  myNumDice = 1;
  @Input() cdNumDice = Array<number>();
  die = new Die();
  game = new Game(this.myNumDice);



  constructor() { }

  ngOnInit(): void {

  }
  updateGame(): void {
    this.game = new Game(Number(this.myNumDice));
  }

}

