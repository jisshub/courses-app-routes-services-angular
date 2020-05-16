import { Component, OnInit } from '@angular/core';
import { TrainersService } from './trainers.service';
import { Trainers } from './trainers.model';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css'],
  // provide the serbices here
  providers: [TrainersService]
})
export class TrainersComponent implements OnInit {

  // inject service instnce here
  constructor(private trainerServ : TrainersService) { }

  // create a an rray of tyoe Triners
  trainersArr: Trainers[] = [];

  ngOnInit(): void {
    // assign the tratiners array ofsrvices to trianerArr here
    this.trainersArr = this.trainerServ.trainers; 
  }

}
