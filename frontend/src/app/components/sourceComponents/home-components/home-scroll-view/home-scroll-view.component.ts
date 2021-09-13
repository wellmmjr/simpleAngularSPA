import { Highlight } from './highlight.model';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-scroll-view',
  templateUrl: './home-scroll-view.component.html',
  styleUrls: ['./home-scroll-view.component.css']
})
export class HomeScrollViewComponent implements OnInit {

  @Input()
  highLightItems: string[]

  constructor() { }

  ngOnInit(): void {

  }

}
