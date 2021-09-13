import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-columnist',
  templateUrl: './home-columnist.component.html',
  styleUrls: ['./home-columnist.component.css']
})
export class HomeColumnistComponent implements OnInit {

  carouselContent: any[]
  constructor() { }

  ngOnInit(): void {
  }

}
