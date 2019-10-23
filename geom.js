class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare () {
    if (this.length === this.width){
      return true;
    } 
    return false;
  }
}
area () {
  this.length * this.width;
}
perimeter () {
  this.length + this.length + this.width + this.width;
}




class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    this.height = height;
    this.base = base;
  }
  isEquilateral() {
    if (this.sideA === this.sideB === this.sideC){
      return true;
    }
    return false;
    }
    isIsosceles() {
      if (this.sideA === sideB !== this.sideC){
        return true;
      }
      return false;
    }
    area() {
      this.base * this.height/ 2;
    }
    isObtuse() {
      //idk
    }
}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length() {
    (x1,y1) (x2, y2)
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
