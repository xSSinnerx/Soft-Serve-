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
  
  // task 4
  class Worker {
    constructor (name,surname,rateperday,workingdays){
    this.name = name;
    this.surname = surname;
    this.rateperday = rateperday;
    this.workingdays = workingdays;
    }
    showSalary() {
      (this.rateperday * this.workingdays);
    }
  }
  Worker.experience = 1,2;
  showSalaryWithExperience() {
    ((this.rateperday * this.workingdays) * this.experience);
  }
  