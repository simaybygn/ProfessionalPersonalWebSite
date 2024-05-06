import { Component, OnInit } from '@angular/core';
import { EmploymentDatas } from 'src/service/service';
import { EmploymentDataModel } from 'src/service/service.page.model';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html'
})
export class EmploymentComponent implements OnInit {
  employmentDatas!: EmploymentDataModel[];
  constructor() { }

  ngOnInit() {
    this.employmentDatas = EmploymentDatas;
  }

}
