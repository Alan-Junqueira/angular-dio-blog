import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  photoCover: string = "https://uncensoredtactical.com/wp-content/uploads/2021/04/Placeholder-1920x1080-1.jpg"
  contentTitle: string = ""
  contentDescription: string = ""

  constructor(private route:ActivatedRoute ){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe( value => console.log(value.get('id')))
  }
}
