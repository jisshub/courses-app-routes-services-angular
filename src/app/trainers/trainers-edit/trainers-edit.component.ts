import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TrainersService } from "../trainers.service";

@Component({
  selector: 'app-trainers-edit',
  templateUrl: './trainers-edit.component.html',
  styleUrls: ['./trainers-edit.component.css']
})
export class TrainersEditComponent implements OnInit {

  // access the input element here
  @ViewChild('getTrainer', {static: true}) trainerName: ElementRef;
  @ViewChild('getCourse', {static: true}) trianerCourse: ElementRef; 

  // inject the srvuce to this component
  constructor(private trainerServ: TrainersService) { }

  ngOnInit(): void {
  }
  // pass the accessed input data to add Trainers as object
  onSubmitTrainer(){
    this.trainerServ.addTrainers({
      name: this.trainerName.nativeElement.value,
      course: this.trianerCourse.nativeElement.value
    })
  }

}
