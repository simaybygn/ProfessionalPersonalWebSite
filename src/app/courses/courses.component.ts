import { Component, OnInit } from '@angular/core';
import { CoursesData } from 'src/service/service';
import { CoursesDataModel } from 'src/service/service.page.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
 coursesDatas!:CoursesDataModel[];

  constructor() { }

  ngOnInit() {
    this.coursesDatas=CoursesData;
  }

  flip(item:CoursesDataModel): void {
    item.isFlipped = !item.isFlipped;
  }

}
