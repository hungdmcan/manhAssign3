import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/student';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

      @Input() studentInfo: Student;
     date = new Date();
     year = this.date.getFullYear();
     months
        = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
     month = this.months[this.date.getMonth()];
     day = this.date.getDate();

     constructor() { }

  ngOnInit(): void {

  }

}
