import { Injectable, EventEmitter } from "@angular/core";
import { Courses } from './courses.model';

@Injectable () export class CourseService{

    // courseChanged = new EventEmitter<Courses[]>();

    courses: Courses[] = [];

    // define a method and pass data,

    addingCourses(fetchData: {name: string, amount: number}){
        // push the data to courses array of Courses[]
        this.courses.push(new Courses(fetchData.name, fetchData.amount))
    }
}