import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentdataService } from 'src/app/shared/studentdata.service';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent implements OnInit{
  studdetail:any;
  constructor(public serv:StudentdataService, public router:Router){}
  ngOnInit(): void {
    this.fetchstuds();
  }

  fetchstuds():void{
    this.serv.getstudentdata().subscribe((data=>{
      this.studdetail=data;
      console.log(this.studdetail)
    }))
  }

  edititem(id:any){
    this.router.navigate(['home/editstuds/'+id]);

    // router when placement officer clicks edit
    // this.router.navigate(['home/editbypo/'+id]);
  }

  delitem(id:any){
    this.serv.delitem(id).subscribe(data=>console.log(data))
    alert('Data deleted')
    this.fetchstuds();
  }
}