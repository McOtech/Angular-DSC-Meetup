import { Component, OnInit } from '@angular/core';
import { Course } from '../classes/course';
import { CourseService } from '../course.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  courses: Course[]

  constructor(private CourseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses()
  }

  getCourses(): void{
    this.CourseService.getCourses().subscribe(courses => this.courses = courses)
  }

}
