//3. Write a “person” class to hold all the details.
//code:
class Person {
constructor(firstName, lastName, age, email, place, year, batch, education) {
this.firstName = firstName;
this.lastName = lastName;
this.age = age;
this.email = email;
this.place = place;
this.year = year;
this.batch = batch;
this.education = education;
}
getFullName() {
return `${this.firstName} ${this.lastName}`;
}
getAge() {
return this.age;
}
getEmail() {
return this.email;
}
getPlace() {
return this.place;
}
setPlace(place) {
this.place = place;
}
getYear() {
return this.year;
}
setYear(year) {
this.year = year;
}
getBatch() {
return this.batch;
}
setBatch(batch) {
this.batch = batch;
}
getEducation() {
return this.education;
}
setEducation(education) {
this.education = education;
}
}
const person = new Person("Mohan", "Sivakuamr", 29, "mohansivakumar359@gmail.com", "Dusi, Kancheepuram, Tamilnadu", 2015, "B57 WD Tamil", "DME");
console.log("Full Name:", person.getFullName());
console.log("Age:", person.getAge());
console.log("Email:", person.getEmail());
console.log("Place:", person.getPlace());
console.log("Year:", person.getYear());
console.log("Batch:", person.getBatch());
console.log("Education:", person.getEducation());

