import { StateForm64 } from './enum-pic-form.model';

import { Component, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

@Component({
  selector: 'app-pic-form-to64',
  templateUrl: './pic-form-to64.component.html',
  styleUrls: ['./pic-form-to64.component.css']
})

export class PicFormTo64Component {

  inputTitle: String = new String()

  inputText: String = new String()

  componentContentFor = 0

  @Input() isFormComplete = false

  contentMidia =  {
    title: '',
    text: ''
  }
  
  @Input()
  typeFormComponentFor = StateForm64.init

  stateEnumValidator = StateForm64

  imageUrl: Map<string, string> = new Map<string, string>()

  constructor(private modalService: NgbModal) { }

  @ViewChild('autosize') autosize: CdkTextareaAutosize

  ngOnInit(){
    console.log(this.typeFormComponentFor+" meu componente passando")
  }

  imageUrlEvent(value){
    this.imageUrl = value
  }

  open(content){
    
    this.modalService.open(content, {size: 'lg', centered: true, scrollable: true, ariaLabelledBy: 'modal-basic-title'})
  }

  getDismiss() {
    console.log("meu tipo \n"+this.typeFormComponentFor)
    this.modalService.dismissAll()

    
  }



  registerContent(mapContent: Map<string, string>){

  }

}
