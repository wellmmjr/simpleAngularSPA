import { PickPicTo64ButtonComponent } from './../pick-pic-to64-button/pick-pic-to64-button.component';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pic-form-to64',
  templateUrl: './pic-form-to64.component.html',
  styleUrls: ['./pic-form-to64.component.css']
})

export class PicFormTo64Component implements OnInit {

  contentMidia =  {
    title: '',
    text: ''
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
