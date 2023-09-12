import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Degree } from 'src/app/models/degree';
import { DegreeService } from 'src/app/services/degree/degree.service';
import { TopicService } from 'src/app/services/topic/topic.service';
@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.scss']
})
export class TopicDetailsComponent {
  topicId:any;
  topic: any ; 
  
  constructor(private router:Router,private route:ActivatedRoute,private service:TopicService) { }

  ngOnInit(): void { 

    this.route.paramMap.subscribe(params => {  this.topicId = params.get('id'); });
 
  
    this.service.getTopicById(this.topicId).subscribe({
        next: (result) => {
          this.topic= result;
          
        }
      });
    

  }
}
