import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { UploadFileModel } from '../models/uploadFile';
import { DashboardModel } from '../models/dashboard';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  files: DashboardModel[];
  commentsForm = new FormGroup(
    {
      comment: new FormControl("", Validators.required),
    });

  constructor(private dashboardService: DashboardService, private userService: UserService) { }

  refreshData() {
    this.dashboardService.getUploadFiles().subscribe(result => {
      this.files = (result as Object[]).map(file => {
        return (file as DashboardModel);
      }); // cast : transformo lo que viene del server a un modelo que yo conosco, que es DashbordModel
    });
  }

  ngOnInit() {
    this.refreshData();
  }

  sendComment(file: DashboardModel) {
    this.dashboardService.sendComment(file.id, this.commentsForm.value.comment)
      .subscribe(() => {
        this.commentsForm.value.comment = "babu";
        this.refreshData();
      });
  }

  likesCont(file) {
    this.dashboardService.updateLikes(file.id).subscribe(()=>file.likes++);
  }
}
