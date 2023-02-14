                                    /*Practice*/
class ListBinding{
    constructor(element){
        this.listElement = element;
        this.textList = [
            "bar",
            "beer"
        ];
    }

    //make li element
    static createListItem(text) {
        const li = document.createElement("li");
        li.textContent = text;
        return li;
    }

    update() {
        //remove all existing li
        while(this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild);
        }

        //fill list
        for(let text of this.textList){
            this.listElement.appendChild(ListBinding.createListItem(text));
        }
    }

    add(text){
        this.textList.push(text);
        this.update();
    }

    remove(index){
        this.textList.splice(index, 1);
        this.update();
    }

}








//                                 /*POLYMORPHISM*/
// class Animal{
//     constructor(name) {
//         this.name = name;
//     }

//     makeSound() {
//         console.log("Generic animal sound")
//     }
// }                                

// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }

//     makeSound() {
//         console.log("Woooooofffffff")
//     }
// }

// const a1 = new Animal("Josh");
// const a2 = new Dog("Mike");
// a1.makeSound();
// a2.makeSound();





//                             /*INHERITANCE AND EXTENDS*/
// class Person{
//     constructor(_name, _age){
//         this.name = _name;
//         this.age = _age;
//     }
//     describe(){
//         console.log(` I am ${this.name} and I am ${this.age} years old`)
//     }
    
// }

// class Programmer extends Person {
//     constructor(_name, _age, yearsOfEx){
//         super(_name, _age);
//         this.yearsOfEx = yearsOfEx;
//     }
// }

// const programmers = [
//     new Programmer("Mike", 54, 13),
//     new Programmer("Chuck", 44, 23),
//     new Programmer("Rail", 34, 3)
// ];

// function devSoftware(programmers) {
//         Programmer.describe();
// }

// devSoftware(programmers)






//                             /*STATIC METHODS*/
// class Square {
//     constructor(_width) {    //used to setup object
//         this.width = _width;
//         this.height = _width;            //3 properties
//     }

//     static equals (a,b) {
//         return a.width * a.height === b.width * b.height
//     }

//     static isValidDim (width,height) {
//         return width === height;
//     }
// }
// let square1 = new Square(8);
// let square2 = new Square(9);





//                             /*GETTERS & SETTERS*/
// class Square {
//     constructor(_width) {    //used to setup object
//                 this.width = _width;
//                 this.height = _width;            //3 properties
//                 this.numOfReq = 0;
//             }
//     get area() {
//         this.numOfReq++;
//         return this.width * this.height;
//     }
//     set area(area){
//         this.width = Math.sqrt(area);
//         this.height = this.width;
//     }
// }
// let square1 = new Square(25)




//                         /*BASICS*/
// class Rectangle {
//     constructor(_width, _height, _color) {    //used to setup object
//         this.width = _width;
//         this.height = _height;            //3 properties
//         this.color = _color;
//     }
//     getArea() {
//         return this.width * this.height;
//     }
//     printDescription() {
//         console.log(`I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`)
//     }
// }
// let myRectangle1 = new Rectangle(5, 3, "blue");
// let myRectangle2 = new Rectangle(10, 5, "red");