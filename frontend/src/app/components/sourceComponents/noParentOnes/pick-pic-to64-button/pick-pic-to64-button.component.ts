import { PicFormTo64Component } from './../pic-form-to64/pic-form-to64.component';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import Swall from 'sweetalert2'


@Component({
  selector: 'app-pick-pic-to64-button',
  templateUrl: './pick-pic-to64-button.component.html',
  styleUrls: ['./pick-pic-to64-button.component.css']
})
export class PickPicTo64ButtonComponent  {

  //base64s
  myImgBase64String: string;

  @Output() imageURL = new EventEmitter<''>()

  fileName: string = "Selecione o arquivo";

  picked(event) {
    console.log("event recebido "+event.target.files)
    let fileList: FileList = event.target.files;
    // debugger;
    if (fileList.length > 0) {
      const file: File = fileList[0];

      this.handleInputChange(file); //turn into base64

    }
    else {
      this.prettyAlert('Envio da Imagem', 'error', "Nenhuma imagem selecionada.")
    }
  }


  handleInputChange(files) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    this.fileName = file.name

    if (!file.type.match(pattern)) {
      this.prettyAlert('Formato Inválido', 'error', "Selecione um arquivo de imagem válido.");
      return;
    }
    reader.onloadend = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);

    reader.onload = (event: any) => {
      this.imageURL.emit(event.target.result)
    }

  }

  // imageUrlEvent(value){
  //   console.log("heres the value "+value)
  //   this.imageUrl = value
  // }

  handleReaderLoaded(e) {

    let reader = e.target;
    this.myImgBase64String = reader.result.substr(reader.result.indexOf(',') + 1);

  }

  prettyAlert(titleP: string, iconP, textP: string){

    Swall.fire({
      title: titleP,
      text: textP,
      icon: iconP
    });
  
  }

  dropSelectedPic(){
    this.imageURL.emit('')
    this.fileName = "Selecione o arquivo"
  }
}
