import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { TopicsComponent } from './components/topics/topics.component';
import { DegreesComponent } from './components/degrees/degrees.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { AddDegreeComponent } from './components/add-degree/add-degree.component';
import { AddTopicComponent } from './components/add-topic/add-topic.component';
import { EditSubjectComponent } from './components/edit-subject/edit-subject.component';
import { EditDegreeComponent } from './components/edit-degree/edit-degree.component';
import { EditTopicComponent } from './components/edit-topic/edit-topic.component';
import 'bootstrap/dist/js/bootstrap.bundle';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { DegreeDetailsComponent } from './components/degree-details/degree-details.component';
import { SubjectDetailsComponent } from './components/subject-details/subject-details.component';
import { TopicDetailsComponent } from './components/topic-details/topic-details.component';


const routes: Routes = [

 {
   path:'',
   component:SigninComponent
 },
 
 {path: 'ELearning', component:NavbarComponent,children: [
  {path:'course/details/:id', component:CourseDetailsComponent},
  {path:'degree/details/:id', component:DegreeDetailsComponent},
  {path:'subject/details/:id', component:SubjectDetailsComponent},
  {path:'topic/details/:id', component:TopicDetailsComponent},

  {path:'courses', component:CoursesComponent},
  {path:'degrees', component:DegreesComponent},
  {path:'subjects', component:SubjectsComponent},
  {path:'topics', component:TopicsComponent},
  {path:'subject/add', component:AddSubjectComponent},
  {path:'course/add', component:AddCourseComponent},
  {path:'degree/add', component:AddDegreeComponent},
  {path:'topic/add', component:AddTopicComponent},
  {path:'subject/edit/:id', component:EditSubjectComponent},
  {path:'degree/edit/:id', component:EditDegreeComponent},
  {path:'topic/edit/:id', component:EditTopicComponent},
  {path:'course/edit/:id', component:EditCourseComponent},
 
]}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
