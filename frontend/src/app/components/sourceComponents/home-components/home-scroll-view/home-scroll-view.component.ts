import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PicFormTo64Component } from './../../noParentOnes/pic-form-to64/pic-form-to64.component';
import { Component, Input, OnInit } from '@angular/core';
import { StateForm64 } from '../../noParentOnes/pic-form-to64/enum-pic-form.model'
@Component({
  selector: 'app-home-scroll-view',
  templateUrl: './home-scroll-view.component.html',
  styleUrls: ['./home-scroll-view.component.css']
})
export class HomeScrollViewComponent implements OnInit {

  @Input()
  highLightItems: string[]

  stateEnum = StateForm64


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  openModal(){
    const modalRef = this.modalService.open(PicFormTo64Component)
    modalRef.componentInstance.typeFormComponentFor = this.stateEnum.highlight
  }

}
