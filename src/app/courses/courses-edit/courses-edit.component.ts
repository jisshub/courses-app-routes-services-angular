import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CourseService } from '../cousrses.service';

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['./courses-edit.component.css']
})
export class CoursesEditComponent implements OnInit {

  @ViewChild('getCourse', {static: true}) name: ElementRef;
  @ViewChild('getAmount', {static: true}) amount: ElementRef;

  // inject courseService here
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
  }
  // apss the name and amount to addinfCOurse as arguments
  onSubmit(){
    // invoke addingCOurses here
    this.courseService.addingCourses({
      name: this.name.nativeElement.value,
      amount: this.amount.nativeElement.value
    })
  }

}
