import { Injectable } from '@angular/core';
import { Course } from './classes/course'
import { COURSES } from './classes/mock-courses'
import { Observable, of} from 'rxjs'
import { MessagesService } from './messages.service'

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private messageService: MessagesService) { }

  getCourses(): Observable<Course[]>{
    this.messageService.add('CourseService: fetched courses')
    return of (COURSES)
  }
}
