import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from 'src/app/shared/userdata.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EditUserComponent implements OnInit {
  userId!: string;
  user: any = {};

  constructor(private route: ActivatedRoute, private userDataService: UserdataService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      this.userDataService.getUserById(this.userId).subscribe(
        (user) => {
          this.user = user;
        },
        (error) => {
          console.error(error);
          // Handle error if necessary
        }
      );
    });
  }

  updateUser(): void {
    if (this.user.newPassword) {
      // Handle password update
      this.user.password = this.user.newPassword;
    } else {
      // Remove password property if not updating password
      delete this.user.password;
    }
  
    console.log('Updating user:', this.user);
  
    this.userDataService.updateUser(this.userId, this.user).subscribe(
      (response) => {
        console.log('Update successful:', response.message);
        // Handle success or navigate to another page
      },
      (error) => {
        console.error('Update error:', error);
        // Handle error if necessary
      }
    );
  }
  
  
  
}
