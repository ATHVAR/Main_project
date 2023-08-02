import { Component } from '@angular/core';
import { UserdataService } from 'src/app/shared/userdata.service';

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
        window.alert('User added successfully!');
        this.clearForm();
      },
      (error) => {
        window.alert('Error adding user. Please try again.');
        console.error(error);
      }
    );
  }

  clearForm(): void {
    this.user = {}; // Clear the form fields
  }
}
