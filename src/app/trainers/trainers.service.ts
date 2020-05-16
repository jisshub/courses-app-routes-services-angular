import { Injectable } from '@angular/core';
import { Trainers } from './trainers.model';

@Injectable({
  providedIn: 'root'
})
export class TrainersService {

  constructor() { }

  // create a trainers array of type Trainers
  trainers: Trainers[] = [];

  // define a method that accepts an object - push name, course to trianers array 
  addTrainers(trainerData: {name: string, course: string}){
    this.trainers.push({
      name: trainerData.name,
      course: trainerData.course,
    })
  }
}
