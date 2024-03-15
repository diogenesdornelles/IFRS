import Vector from './vetor';
import {expect, test} from '@jest/globals';

let vector = new Vector<number>();


test("print array length",
    () => {
        vector.appendElement(1);
        vector.appendElement(2);
        vector.appendElement(3);
        expect(vector.length).toBe(3);  // 3
})

test("print array",
    () => {
        expect(vector.toString()).toBe('[1,2,3]');  // '[1,2,3]'
})

test("print second pos.",
    () => {
        expect(vector.elements[1]).toBe(2);  // 2
})

test("search element 2",
    () => {
        expect(vector.searchElementeByValue(3)).toBe(2);  // 2
})

test("insert element on 1 pos.",
    () => {
        vector.addElementToAnyPosition(1, 4); // '[1,4,2,3]'
        expect(vector.elements[1]).toBe(4);
})

test("insert element on 3 pos.",
    () => {
        vector.addElementToAnyPosition(3, 5); // '[1,4,2,5,3]'
        expect(vector.elements[3]).toBe(5);
})

test("insert element on 5 pos.",
    () => {
        vector.addElementToAnyPosition(5, 6); // '[1,4,2,5,3,6]'
        expect(vector.elements[5]).toBe(6);
})

test("remove element from second pos.",
    () => {
        let removed = vector.removeElementByPosition(2)  // '[1,4,5,3,6]'
        expect(removed).toBe(2);
})

test("remove element 5",
    () => {
        let removed = vector.removeElementByvalue(5)  // '[1,4,3,6]'
        expect(removed).toBe(5);
})

test("print array",
    () => {
        expect(vector.toString()).toBe('[1,4,3,6]');  // '[1,4,3,6]'
})


test("print array length",
    () => {
        expect(vector.length).toBe(4);  // 4
})
