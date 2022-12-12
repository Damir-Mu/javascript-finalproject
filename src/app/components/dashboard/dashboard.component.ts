import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Task } from 'src/app/shared/models/task';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {



  taskList: Task[] = [];
  taskObject: Task = {
    id: '',
    task: '',
    complete: false
  }
  id: string = '';
  task: string = '';

  public itemCount: Number = this.taskList.length;

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.getAllTasks();
  }


  //Methods for Firestore
  getAllTasks() {

    this.authService.getAllTasks().subscribe(res => {

      this.taskList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        console.log(data)
        return data;
      })
    }, err => {
      alert('Error while fetching data' + err)
    })
  }

  addTask() {
    if (this.task == '') {
      alert('Please, fill up the task you want to add');
      return;
    }

    this.taskObject.id = '';
    this.taskObject.task = this.task;

    this.authService.addItem(this.taskObject);
    this.id = '';
    this.task = '';
  }

  updateTask() {
    this.updateTask();
  }

  taskComplete(task: Task) {
    this.authService.taskComplete(task);
  }

}