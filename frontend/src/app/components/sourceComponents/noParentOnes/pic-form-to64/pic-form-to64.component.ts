import { PrettyAlertComponent } from '../pretty-alert/pretty-alert.service';
import { Highlight } from './../../home-components/home-scroll-view/highlight.model';
import { HomeColumnistService } from './../../../home/home-services/home-services-columnist.service';
import { HomeHighlightService } from '../../../home/home-services/home-services-highlight.service';
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
  
  @Input()
  typeFormComponentFor = StateForm64.init

  stateEnumValidator = StateForm64

  imageUrl: Map<string, string> = new Map<string, string>()

  highlight: Highlight

  constructor(private modalService: NgbModal, private prettyAlert: PrettyAlertComponent, private highlightService: HomeHighlightService, private columnistService: HomeColumnistService) { }

  @ViewChild('autosize') autosize: CdkTextareaAutosize

  imageUrlEvent(value){
    this.imageUrl = value
  }

  open(content){
    
    this.modalService.open(content, {size: 'lg', centered: true, scrollable: true, ariaLabelledBy: 'modal-basic-title'})
  }

  getDismiss() {

    this.modalService.dismissAll()

  }

  emptyField(){
    if(this.typeFormComponentFor === this.stateEnumValidator.columnist){
      if(this.inputText != '' && this.inputTitle != ''){
        this.isFormComplete = true
      }else{
        this.isFormComplete = false
      }
    }else if(this.typeFormComponentFor === this.stateEnumValidator.highlight){
      
      if(this.inputTitle != ''){
        this.isFormComplete = true
      }else{
        this.isFormComplete = false
      }
    }else{
      this.isFormComplete = false
    }
  }

  registerContent(){
    
    if(this.typeFormComponentFor === this.stateEnumValidator.highlight){
      let midiaFromPic: Map<number, string> = new Map<number, string>()
      
      this.imageUrl.forEach((value: string, key: string) => {
        
        // console.log("esse pedaço de merda \n"+value+"\nchave do pedaço de merda"+key)
        // midiaFromPic.set(tuple, key)
        Array.from(this.imageUrl.keys()).forEach((value, key) => {
          console.log("esse pedaço de merda \n"+value+"\nchave do pedaço de merda \n"+key)
          midiaFromPic.set(key, value)
        })
      })
      console.log("sos \n"+midiaFromPic)
      this.highlight = {
        id: 6,
        title: this.inputTitle,
        midia: midiaFromPic
      }      
      console.log("sos \n"+this.highlight.midia[0])
      this.highlightService.createHighLight(this.highlight).subscribe(() => {
        this.prettyAlert.showMessage("Destaque enviado!", 'success', "Dados foram enviado para o destaque!")
        this.getDismiss()
      })
    }
  }

}
