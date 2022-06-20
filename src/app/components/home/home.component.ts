import { Component, OnInit } from '@angular/core';

interface mainLinks {
  id: number,
  pathPic: string,
  title: string,
  text: string,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  linksArr: mainLinks[] = [
    { id: 1, pathPic: '/../assets/welcomLink.jpg', title: 'Lorem', text: 'Lorem ipsum dolor sit.' },
    { id: 2, pathPic: '/../assets/welcomLink.jpg', title: 'Lorem', text: 'Lorem ipsum dolor sit.' },
    { id: 3, pathPic: '/../assets/welcomLink.jpg', title: 'Lorem', text: 'Lorem ipsum dolor sit.' },
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
