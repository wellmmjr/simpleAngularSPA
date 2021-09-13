import { Component } from '@angular/core';
import Swall from 'sweetalert2'

@Component({
  selector: 'app-pick-pic-to64-button',
  templateUrl: './pick-pic-to64-button.component.html',
  styleUrls: ['./pick-pic-to64-button.component.css']
})
export class PickPicTo64ButtonComponent  {

  //base64s
  myImgBase64String: string;

  imageURL = ''

  fileName: string = "Selecione o arquivo";

  public picked(event) {
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
      this.imageURL = event.target.result
    }

  }

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
    this.imageURL = ''
    this.fileName = "Selecione o arquivo"
  }
}
