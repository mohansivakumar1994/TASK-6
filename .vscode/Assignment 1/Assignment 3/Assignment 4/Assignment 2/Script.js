//2.Class - circle      

class Circle {
constructor(r) {
this.radius = r;
}
getArea () {
return Math.PI * this.radius * this.radius;
}
}
let myCircle = new Circle(5);
console.log(myCircle.getArea());






