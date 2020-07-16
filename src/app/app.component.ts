import { Component } from '@angular/core';
import { Student } from './models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment 3 - Roll the Dice';
  author: Student = {sname: 'Manh Hung Dao (Mike)',
              sid: '991557299' ,
              scollege: 'Sheridan College'};
}
