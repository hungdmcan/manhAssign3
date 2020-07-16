import { Component, OnInit, NgModule } from '@angular/core';
import { Die } from '../models/die';
import { Game } from '../models/game';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  maxNumDice = 5;
  numDiceArray = [1, 2, 3, 4, 5];
  die = new Die();
  game = new Game(this.maxNumDice);
  title1 = 'Check';

  constructor() { }

  ngOnInit(): void {



//     const maxNumberOfDice = 1; // the max number in the select (can be changed here)
//     let game = new Game(); // the game object
// this.game.rollDice();

//     let numberOfDice = 1; //game.numberOfDice; // the current number of dice
//     console.log(game);

//     let $select; // select tag to input the number of dice
//     let $dice; // tag to contain the image tags
//     let $total; // tag for the displayed number

// preload dice image files to reduce flickering
//     let images = [];
//     for (let i = 1; i <= 1; i++) {
//     let image = new Image();
//     //image.src = dieImageSrc(1);
//     images.push(image);
// }

// // //     $(document).ready(function(){
// // //     $select = $("select");
// // //     $dice = $("#dice");
// // //     $total = $("#total");
// // //     insertSelectOptions();
// // //     insertImages();
// // //     updateTotal();
// // //     handleSelectionChanges();
// // //     handleRollButtonClicks();
// // // });

//     function dieImageSrc(side): string {
//     return `images/dice/side_{{side}}.png`;
// }

//     function insertImages(): void {
//     for (let die of this.game.dice) {
//         let side = die.side;
//         //let src = dieImageSrc(side);
//         //dice.append(`<img src="${src}" alt="side ${side}">`);
//     }
// }

//     function insertSelectOptions() {
//     for (let i = 1; i <= maxNumberOfDice; i++) {
//         $select.append(`<option value="${i}" ${(i === numberOfDice)?'selected':''}>${i}</option>`);
//     }
// }

//     function handleSelectionChanges() {
//     $select.change(function () {
//         console.log("the change event handler is called");
//         let count = parseInt($select.val());
//         if (count !== numberOfDice) {
//             numberOfDice = count;
//             game = new Game(count);
//             game.rollDice();
//             $dice.html("");
//             insertImages();
//             updateTotal();
//             saveSides(game);
//         }
//     });
// }

//     function updateTotal() {
//     $total.text(game.total);
// }

//     function handleRollButtonClicks() {
//     $("#roll_button").click(function () {
//         console.log("the click event handler is called");
//         game.rollDice();
//         $dice.find("img").each(function(index){
//             let side = game.dice[index].side;
//             let src = dieImageSrc(side);
//             $(this).attr("src", src).attr("alt", `side ${side}`);
//         });
//         updateTotal();
//         saveSides(game);
//     });
  }
}

