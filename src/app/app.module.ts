import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { EducationComponent } from './education/education.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { EmploymentComponent } from './employment/employment.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [					
    AppComponent,
      SummaryComponent,
      EducationComponent,
      EmploymentComponent,
      ProjectsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
