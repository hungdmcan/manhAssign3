import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sName = 'Manh Hung Dao (Mike)';
  sID = '991557299';
  constructor() { }

  ngOnInit(): void {
  }

}
