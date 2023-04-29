import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover: string = "https://uncensoredtactical.com/wp-content/uploads/2021/04/Placeholder-1920x1080-1.jpg"
  contentTitle: string = ""
  contentDescription: string = ""

  constructor(){}
}
