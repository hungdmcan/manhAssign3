import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sName = 'Manh Hung Dao (Mike)';
  sID = '991557299';
  @Input() studentInfo: Student;
  constructor() { }

  ngOnInit(): void {
  }

}
