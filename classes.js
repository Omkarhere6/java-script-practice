class Rectangle{
    constructor(height,width,color){
        this.height = height,
        this.width = width,
        this.color=color
    }

    area(){
        const area = this.width * this.height;
        return area;
    }

    printColor(){
        console.log(`the color of the rectangle is ${this.color}`);
    }
}

const rect = new Rectangle(10,5,"RED");

console.log(rect.area());
rect.printColor();


// Inheritance in class

class methodsOfRect extends Rectangle{
    areaFromMethodClass(){
        const area = this.width * this.height;
        return area;
    }

    printColorFromMethodClass(){
        console.log(`the color of the rectangle is ${this.color}`);
    }
}

const methodsOfRectangle = new methodsOfRect(5,5,"Green");


console.log(methodsOfRectangle.areaFromMethodClass());
methodsOfRectangle.printColorFromMethodClass();


// Using inhericance to modify the inbuild classes is possible too

class myArr extends Array {
    isEmpty() {
      return this.length <= 0;
    }
  }
  
  let arr = new myArr(10, 20, 30);
  console.log(arr.isEmpty());