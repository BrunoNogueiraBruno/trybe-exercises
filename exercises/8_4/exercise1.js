const assert = require('assert')

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2] //area = 2
const rectangle2 = [3, 5] //area = 15
const rectangle3 = [6, 9] //area = 54
const rectangles = [rectangle1, rectangle2, rectangle3];

for(rectangle of rectangles) {
    assert.equal(rectangleArea(...rectangle), rectangle[0]*rectangle[1]) // altere a chamada da funcao rectangleArea
}