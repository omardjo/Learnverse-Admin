import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Degree } from 'src/app/models/degree';
import { SubjectService } from 'src/app/services/subject/subject.service';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.scss']
})
export class SubjectDetailsComponent {
  subjectId:any;
  subject: any ; 
  
  constructor(private router:Router,private route:ActivatedRoute,private service:SubjectService) { }

  ngOnInit(): void { 

    this.route.paramMap.subscribe(params => {  this.subjectId = params.get('id'); });
 
  
    this.service.getSubjectById(this.subjectId).subscribe({
        next: (result) => {
          this.subject= result;
          
        }
      });
    

  }
}
