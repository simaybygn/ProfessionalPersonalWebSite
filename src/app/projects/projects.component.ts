import { Component, OnInit } from '@angular/core';
import { ProjectsData } from 'src/service/service';
import { ProjectsDataModel } from 'src/service/service.page.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {

  projectDatas!:ProjectsDataModel[];
  constructor() { }

  ngOnInit() {
    this.projectDatas=ProjectsData;
  }

}
