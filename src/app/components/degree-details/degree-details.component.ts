import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Degree } from 'src/app/models/degree';
import { DegreeService } from 'src/app/services/degree/degree.service';

@Component({
  selector: 'app-degree-details',
  templateUrl: './degree-details.component.html',
  styleUrls: ['./degree-details.component.scss']
})
export class DegreeDetailsComponent {
  degreeId:any;
  degree: any ; 
  
  constructor(private router:Router,private route:ActivatedRoute,private service:DegreeService) { }

  ngOnInit(): void { 

    this.route.paramMap.subscribe(params => {  this.degreeId = params.get('id'); });
 
  
    this.service.getDegreeById(this.degreeId).subscribe({
        next: (result) => {
          this.degree= result;
          
        }
      });
    

  }
}
