import { PickPicTo64ButtonComponent } from './../pick-pic-to64-button/pick-pic-to64-button.component';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Component, NgZone, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import {take} from 'rxjs/operators'

@Component({
  selector: 'app-pic-form-to64',
  templateUrl: './pic-form-to64.component.html',
  styleUrls: ['./pic-form-to64.component.css']
})

export class PicFormTo64Component {

  contentMidia =  {
    title: '',
    text: ''
  }

  closeResult = ''

  constructor(private modalService: NgbModal) { }

  @ViewChild('autosize') autosize: CdkTextareaAutosize

  open(content){
    this.modalService.open(content, {size: 'lg', centered: true, scrollable: true, ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
