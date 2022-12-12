/****** Todo service ******/


// import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

// //Task model
// import { Task } from '../models/task';

// @Injectable({
//   providedIn: 'root'
// })
// export class TodoService {

//   constructor(private afs: AngularFirestore) { }

//   getAllTasks() {
//     return this.afs.collection('/Tasks').snapshotChanges();
//   }

//   taskComplete(task: Task) {
//     if (task.complete = true) {
//       return this.afs.doc('/Tasks/' + task.id).delete();
//     } else {
//       return
//     }
//   }

//   addItem(task: Task) {
//     task.id = this.afs.createId();
//     return this.afs.collection('/Tasks').add(task);
//   }

//   updateTask(task: Task) {
//     this.taskComplete(task);
//     this.addItem(task);
//   }

// }
