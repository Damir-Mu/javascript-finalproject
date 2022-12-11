import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // a private variable that will hold our state.
  private _tasks: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);

  // a public variable that returns an observable from our state.
  public tasks$: Observable<Task[]> = this._tasks
    .asObservable()
    .pipe(distinctUntilChanged());

  // a helper to get the actual values from the state, not an observable.
  get tasks() {
    return this._tasks.getValue();
  }

  addItem(task: Task) {
    task.id = uuidv4();
    this._tasks.next([...this.tasks, task]);
  }

  updateItem(todo: Task) {
    const index = this.tasks.findIndex((item) => item.id === todo.id);
    const tasks = this.tasks;
    tasks[index] = todo;
    this._tasks.next([...tasks]);
  }

  deleteItem(todo: Task) {
    const tasks = this.tasks.filter((item) => item.id !== todo.id);
    this._tasks.next([...tasks]);
  }

  clearAll() {
    this._tasks.next([]);
  }

  constructor() { }
}
