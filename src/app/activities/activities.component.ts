import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ActivitiesData } from 'src/service/service';
import { ActivitiesDataModel } from 'src/service/service.page.model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html'
})
export class ActivitiesComponent implements OnInit {
  panelOpenState = false;
  activitiesDatas!: ActivitiesDataModel[];

  constructor() { }

  ngOnInit(): void {
    this.activitiesDatas = ActivitiesData; 
  }

}
