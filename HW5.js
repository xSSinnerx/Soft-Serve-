// task 1 
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
  };
  Object.keys(mentor).length
  
  
  // task 2 
  let Mark = {
     age : 32,
  gender : 'male',
  salary : 35000,
  terittory : 'West',
  annualplan : 25000000,}
  console.log (Mark);
  function showProps(obj){
  Object.values(Mark);
  }
  document.write(showProps);
  
  // task 3 
  
  class Persone{
    constructor(name,surname) {
      this.name = name;
      this.surname = surname;}
  
      showFullName () {
     alert (this.name + this.surname);}
    }
  
  let persone = new Persone ("Nestor","Khomytskiy");
  persone.showFullName ();
  
  class Student extends Persone {
    constructor (name,surname,midlename,year,yearofadmission,currentcourse){
      super (name,surname);
    this.year = year;
    this.midlename = midlename;
    this.yearofadmission = yearofadmission;
    this.currentcourse = currentcourse;
  }
  showFullName () {
    alert (this.name + this.surname + this.midlename + this.year);}
  showCourse(){
    alert (this.yearofadmission + this.currentcourse)
  }
  }
  
  let student = new Student ("Nestor","Khomytskiy","Myroslavovych","1988","2006","4");
  student.showFullName ();
  student.showCourse ();
  
  // task 4///////////////////////////////////////////////////


  class Worker {
      #experience = 1.2;
    constructor (fullName,rateperDay,workingDays){
    this.fullName = fullName;
    this.rateperday = rateperDay;
    this.workingdays = workingDays;
    }
    showSalary() {
        console.log (`${this.fullName} salary: ${this.rateperDay * this.workingDays}`);
    }
  
  showSalaryWithExperience() {
    (`${this.fullName} salary: ${this.rateperDay * this.workingdays * this.#experience}`);
  }
  showSalaryWorker() {
      return `${this.rateperDay * this.workingDays * this.#experience}`;
  }
  get showExp() {
      return this.#experience;
  }
  set setExp(experience) {
      this.#experience = experience;

  }
  sortSalaries(workersArray) {
      let sortedSalary = workersArray.sort(function (a,b){
          return a.showSalaryWorker() - b.showSalaryWorker();
      })
for (let i = 0; i < sortedSalary.length; i++) {
    console.log(sortedSalary[i].fullName + ":" + sortedSalary[i].showSalaryWorker());
}
  }
}
let worker1 = new Worker ("Kостя Констянтин", 10, 20);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience:" + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience:" + worker1.showExp);
worker1.showSalaryWithExperience();
console.log();  

let worker2 = new Worker ("Степан Ванвейдерович", 10, 15);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience:" + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience:" + worker2.showExp);
worker2.showSalaryWithExperience();
console.log();  

let worker3 = new Worker ("Катерина Велика", 10, 5);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience:" + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience:" + worker3.showExp);
worker3.showSalaryWithExperience();
console.log();

let workersArray = [worker1,worker2,worker3];
worker3.sortSalaries(workersArray);

//task 5

class GeometricFigure {
  getArea(){
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
  }
class Triangle extends GeometricFigure{
  constructor(b,h) {
    super();
    this.base = b;
    this.height = h;
  }
  getArea(){
    return this.base * this.height / 2;
  }
}
class Square extends GeometricFigure{
  constructor(a){
    super();
    this.side = a;
  }
  getArea() {
    return this.side ** 2;
  }
}
class Circle extends GeometricFigure{
  constructor(r) {
    super();
    this.radius = r;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

function handleFigures(figures) {
  return figures.reduce (function(sum,figure){
    if (figure instanceof GeometricFigure){
      console.log (`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
      return sum + figure.getArea()
    }
    throw Error ('bad argument figure');
  }, 0);
}

const figures = [new Triangle(4,5), new Square(7), new Circle(5)];
console.log (handleFigures(figures));