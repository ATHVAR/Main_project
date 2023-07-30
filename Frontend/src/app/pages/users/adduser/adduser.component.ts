import { Component } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  user: any = {};

  constructor(private userDataService: UserdataService) { }

  addUser(): void {
    this.userDataService.addUser(this.user).subscribe(
      (response) => {
        console.log(response.message);
        // Clear the form or do any other action after adding user
      },
      (error) => {
        console.error(error);
        // Handle error if necessary
      }
    );
  }
}

