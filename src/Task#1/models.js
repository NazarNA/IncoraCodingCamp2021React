// App => Projects => Tasks => User
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
//===================================================================================
var App = /** @class */ (function () {
  function App(name) {
    var _this = this;
    this.name = name;
    this.projects = [];
    this.setName = function (name) {
      _this.name = name;
    };
    this.addProject = function (project) {
      _this.projects.push(project);
    };
  }
  return App;
})();
var Project = /** @class */ (function () {
  function Project() {
    var _this = this;
    this.tasks = [];
    this.addTask = function (task) {
      _this.tasks.push(task);
    };
    this.editTask = function (task) {
      _this.tasks = _this.tasks.map(function (el) {
        return el.id === task.id ? __assign(__assign({}, el), task) : el;
      });
    };
    this.deleteTask = function (id) {
      _this.tasks = _this.tasks.filter(function (task) {
        return id !== task.id;
      });
    };
    this.getTotalTime = function () {
      return _this.tasks.reduce(function (acc, task) {
        return acc + task.durationInMin;
      }, 0);
    };
    this.getAllTasksByDeveloper = function (id) {
      return _this.tasks.filter(function (task) {
        return id === task.developer.id;
      });
    };
  }
  return Project;
})();
var Task = /** @class */ (function () {
  function Task(id, durationInMin, completed, developer, title) {
    var _this = this;
    this.id = id;
    this.durationInMin = durationInMin;
    this.completed = completed;
    this.developer = developer;
    this.title = title;
    this.getInfo = function () {
      return (
        'Task ID: ' +
        _this.id +
        ', title: ' +
        _this.title +
        ', completed: ' +
        (_this.completed ? 'completed' : 'not completed')
      );
    };
  }
  return Task;
})();
var User = /** @class */ (function () {
  function User(id, name) {
    this.id = id;
    this.name = name;
  }
  return User;
})();
var nazar = new User(2202, 'Nazar');
var vasya = new User(1111, 'Vasya');
var todoApp = new App('My awesome ToDo app');
var addFilter = new Task(1, 15, false, nazar, 'add filtration');
var addSort = new Task(2, 3, false, nazar, 'add sorting');
var addDelete = new Task(3, 8, false, vasya, 'add deleting');
var myFirstProject = new Project();
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
