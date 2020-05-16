import { Component, OnInit } from '@angular/core';
import { Courses } from './courses.model';
import { CourseService } from './cousrses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CourseService]
})
export class CoursesComponent implements OnInit {

  // define a courses arrary of Cousres type
  courses: Courses[] = [];

  constructor(private getCourseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.getCourseService.courses;
  }

}
