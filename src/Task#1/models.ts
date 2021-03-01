// App => Projects => Tasks => User

interface ITask {
  id: number;
  durationInMin: number;
  completed: boolean;
  developer: IUser;
  title: string;
  getInfo(): string;
}

interface IProject {
  tasks: ITask[];
  addTask(task: ITask): void;
  editTask(task: Partial<ITask>): void;
  deleteTask(id: number): void;
  getTotalTime(): number;
  getAllTasksByDeveloper(id: number): ITask[];
}

interface IApp {
  name: string;
  projects: IProject[];
  setName(name: string): void;
  addProject(project: IProject): void;
}

interface IUser {
  id: number;
  name: string;
}

//===================================================================================

class App implements IApp {
  public projects: IProject[] = [];

  constructor(public name: string) {}

  setName = (name: string): void => {
    this.name = name;
  };
  addProject = (project: IProject): void => {
    this.projects.push(project);
  };
}

class Project implements IProject {
  public tasks: ITask[] = [];

  addTask = (task: ITask): void => {
    this.tasks.push(task);
  };
  editTask = (task: Partial<ITask>): void => {
    this.tasks = this.tasks.map(el => (el.id === task.id ? { ...el, ...task } : el));
  };
  deleteTask = (id: number): void => {
    this.tasks = this.tasks.filter(task => id !== task.id);
  };
  getTotalTime = (): number => this.tasks.reduce((acc, task) => acc + task.durationInMin, 0);
  getAllTasksByDeveloper = (id: number): ITask[] => this.tasks.filter(task => id === task.developer.id);
}

class Task implements ITask {
  constructor(
    public id: number,
    public durationInMin: number,
    public completed: boolean,
    public developer: IUser,
    public title: string
  ) {}

  getInfo = (): string =>
    `Task ID: ${this.id}, title: ${this.title}, completed: ${this.completed ? 'completed' : 'not completed'}`;
}

class User implements IUser {
  constructor(public id: number, public name: string) {}
}

const nazar = new User(2202, 'Nazar');
const vasya = new User(1111, 'Vasya');
const todoApp = new App('My awesome ToDo app');
const addFilter = new Task(1, 15, false, nazar, 'add filtration');
const addSort = new Task(2, 3, false, nazar, 'add sorting');
const addDelete = new Task(3, 8, false, vasya, 'add deleting');
const myFirstProject = new Project();

myFirstProject.addTask(addSort);
myFirstProject.addTask(addFilter);
myFirstProject.addTask(addDelete);

todoApp.addProject(myFirstProject);

console.log(myFirstProject.tasks);
myFirstProject.editTask({ id: 1, durationInMin: 100 });
console.log(myFirstProject.tasks);

// console.log(myFirstProject.tasks);
// console.log('total time', myFirstProject.getTotalTime());
// console.log('before del', myFirstProject.tasks);
// console.log('tasks', myFirstProject.deleteTask(2));
// console.log('after del', myFirstProject.tasks);
// console.log('before edit', myFirstProject.editTask(addDelete));
// console.log(myFirstProject.tasks);
// console.log('after edit', myFirstProject.tasks);
// console.log('all tasks by vasya', myFirstProject.getAllTasksByDeveloper(vasya.id));
// console.log('info about this task', addDelete.getInfo());
