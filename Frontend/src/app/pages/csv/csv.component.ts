import { Component } from '@angular/core';
import { CsvdataService } from 'src/app/shared/csvdata.service';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CsvComponent {
  selectedFile:File|null=null;
  message:string|null=null;

  constructor(private fileuploadserv:CsvdataService) {}

  onFileChange(event:any):void{
    this.selectedFile=event.target.files[0];
  }

  async uploadFile():Promise<void>{
    if(!this.selectedFile){
      return;
    }
    try{
      const response = await this.fileuploadserv.upload(this.selectedFile);
      this.message = response.success;
    } catch (error) {
      this.message = 'Unsuccessful';
    }
  }

}
