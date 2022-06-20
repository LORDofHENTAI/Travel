import { Component, OnInit } from '@angular/core';

interface mainLinks {
  id: number,
  pathPic: string,
  title: string,
  text: string,
}

interface partnersPic {
  id: number,
  picPath: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  linksArr: mainLinks[] = [
    { id: 1, pathPic: '/../assets/welcomLink.jpg', title: 'Lorem', text: 'Lorem ipsum dolor sit. dfgdfgdfgsfdgsfgsfdgsfdgsfdgsdf' },
    { id: 2, pathPic: '/../assets/welcomLink.jpg', title: 'Lorem', text: 'Lorem ipsum dolor sit.' },
    { id: 3, pathPic: '/../assets/welcomLink.jpg', title: 'Lorem', text: 'Lorem ipsum dolor sit.' },
  ]

  partnersArr: partnersPic[] = [
    { id: 1, picPath: '/../assets/1.jpg' },
    { id: 2, picPath: '/../assets/2.jpg' },
    { id: 3, picPath: '/../assets/3.jpg' },
    { id: 4, picPath: '/../assets/4.jpg' },
    { id: 5, picPath: '/../assets/1.jpg' }]




  constructor() { }

  ngOnInit(): void {
  }

}
