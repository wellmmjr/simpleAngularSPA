import { MatFormFieldControl } from '@angular/material/form-field';
import { Component, OnInit } from '@angular/core';
import Swall from 'sweetalert2'

@Component({
  selector: 'app-pick-pic-to64-button',
  templateUrl: './pick-pic-to64-button.component.html',
  styleUrls: ['./pick-pic-to64-button.component.css']
})
export class PickPicTo64ButtonComponent implements OnInit {

  sellersPermitFile: any;
  //base64s
  sellersPermitString: string;
  //json

  fileName: string;

  finalJson = {};

  constructor(){}

  ngOnInit(){
    this.fileName = "Selecione o arquivo"
  }


  addPictures() {
    this.finalJson = {
      "sellersPermitFile": this.sellersPermitString,
    }
  }
  public picked(event) {
    let fileList: FileList = event.target.files;
    // debugger;
    if (fileList.length > 0) {
      const file: File = fileList[0];

      this.sellersPermitFile = file;
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
    console.log("format: "+file.type+"\n name: "+file.name)
    if (!file.type.match(pattern)) {
      this.prettyAlert('Formato Inválido', 'error', "Selecione um arquivo de imagem válido.");
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    this.sellersPermitString = base64result;
  }

  prettyAlert(titleP: string, iconP, textP: string){

    Swall.fire({
      title: titleP,
      text: textP,
      icon: iconP
    });
  
  }
}
