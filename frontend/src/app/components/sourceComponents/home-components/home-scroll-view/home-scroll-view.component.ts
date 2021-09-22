import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PicFormTo64Component } from './../../noParentOnes/pic-form-to64/pic-form-to64.component';
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

  teste: PicFormTo64Component
  @Input()
  highLightItems: string[]

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  openModal(){
    const modalRef = this.modalService.open(PicFormTo64Component)
  }

}
