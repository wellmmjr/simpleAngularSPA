import { PrettyAlertComponent } from '../pretty-alert/pretty-alert.service';
import { CarouselContent } from './../../home-components/home-carousel/carouselContent.model';
import { Highlight } from './../../home-components/home-scroll-view/highlight.model';
import { PicFormTo64Component } from './../pic-form-to64/pic-form-to64.component';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';



@Component({
  selector: 'app-pick-pic-to64-button',
  templateUrl: './pick-pic-to64-button.component.html',
  styleUrls: ['./pick-pic-to64-button.component.css']
})
export class PickPicTo64ButtonComponent  {

  //base64s
  myImgBase64String: string;

  modelHighList: Highlight

  modelCarousel: CarouselContent

  @Output() base64imageURL = new EventEmitter<Map<string, string>>()

  contentMap: Map<string, string> = new Map<string, string>()

  fileName = ["Selecione o arquivo"];

  isMultiple = true

  constructor(private prettyAlert: PrettyAlertComponent){ }

  picked(event) {
    
    let fileList: FileList = event.target.files;
    
    if (fileList.length > 0) {

      for(let targetFiles = 0; targetFiles < fileList.length; targetFiles++ ){
        
        const file: File = fileList[targetFiles];

        this.handleInputChange(file); //turn into base64
        
      }

    }
    else {
      this.prettyAlert.showMessage('Envio da Imagem', 'error', "Nenhuma imagem selecionada.")
    }
  }


  handleInputChange(files) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    
    if (!file.type.match(pattern)) {
      this.prettyAlert.showMessage('Formato Inválido', 'error', "Selecione um arquivo de imagem válido.");
      return;
    }
    reader.onloadend = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);

    reader.onload = (event: any) => {
      if(!this.contentMap.has(event.target.result)){
        this.contentMap.set(event.target.result, file.name)
        this.base64imageURL.emit(this.contentMap)
      }else{
        this.prettyAlert.showMessage("Atenção", 'warning', "Imagem já foi adicionada anteriormente.")
      }
    }
    
  }

  handleReaderLoaded(e) {

    let reader = e.target;
    this.myImgBase64String = reader.result.substr(reader.result.indexOf(',') + 1);

  }

  dropSelectedPic(imageurl){

    if(this.contentMap.has(imageurl)){
      this.contentMap.delete(imageurl)
      this.base64imageURL.emit(this.contentMap)
    }else{
      this.prettyAlert.showMessage("Não encontrada", 'error', "Imagem selecionada não encontrada para exclusão")
    }

  }

}
