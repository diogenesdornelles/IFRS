"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var linkedList_1 = require("./linkedList");
describe('Node Class', function () {
    it('should create a new node with the given data', function () {
        var node = new linkedList_1.Node(5);
        (0, globals_1.expect)(node.data).toBe(5);
        (0, globals_1.expect)(node.next).toBeNull();
        (0, globals_1.expect)(node.index).toBe(-1);
    });
    it('should set and get the data of the node', function () {
        var node = new linkedList_1.Node(5);
        node.data = 10;
        (0, globals_1.expect)(node.data).toBe(10);
    });
    it('should set and get the next node', function () {
        var node1 = new linkedList_1.Node(5);
        var node2 = new linkedList_1.Node(10);
        node1.next = node2;
        (0, globals_1.expect)(node1.next).toBe(node2);
    });
    it('should set and get the index of the node', function () {
        var node = new linkedList_1.Node(5);
        node.index = 0;
        (0, globals_1.expect)(node.index).toBe(0);
    });
});
describe('LinkedList Class', function () {
    var list;
    beforeEach(function () {
        list = new linkedList_1.LinkedList();
    });
    it('should initialize with a null header and length 0', function () {
        (0, globals_1.expect)(list.header).toBeNull();
        (0, globals_1.expect)(list.lenght).toBe(0);
    });
    it('should add a node to the start', function () {
        var _a;
        list.addToStart(5);
        (0, globals_1.expect)((_a = list.header) === null || _a === void 0 ? void 0 : _a.data).toBe(5);
        (0, globals_1.expect)(list.lenght).toBe(1);
    });
    it('should add a node to the end', function () {
        var _a, _b;
        list.addToEnd(5);
        list.addToEnd(10);
        (0, globals_1.expect)((_b = (_a = list.header) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.data).toBe(10);
        (0, globals_1.expect)(list.lenght).toBe(2);
    });
    it('should get a node by index', function () {
        list.addToEnd(5);
        list.addToEnd(10);
        (0, globals_1.expect)(list.getByIndex(1)).toBe(10);
    });
    it('should remove a node from the start', function () {
        var _a;
        list.addToEnd(5);
        list.addToEnd(10);
        list.removeFromStart();
        (0, globals_1.expect)((_a = list.header) === null || _a === void 0 ? void 0 : _a.data).toBe(10);
        (0, globals_1.expect)(list.lenght).toBe(1);
    });
    it('should remove a node from the end', function () {
        var _a;
        list.addToEnd(5);
        list.addToEnd(10);
        list.removeFromEnd();
        (0, globals_1.expect)((_a = list.header) === null || _a === void 0 ? void 0 : _a.next).toBeNull();
        (0, globals_1.expect)(list.lenght).toBe(1);
    });
    it('should update a node by index', function () {
        list.addToEnd(5);
        list.addToEnd(10);
        list.updateByIndex(15, 1);
        (0, globals_1.expect)(list.getByIndex(1)).toBe(15);
    });
    it('should remove a node by index', function () {
        var _a;
        list.addToEnd(5);
        list.addToEnd(10);
        list.removeByIndex(0);
        (0, globals_1.expect)((_a = list.header) === null || _a === void 0 ? void 0 : _a.data).toBe(10);
        (0, globals_1.expect)(list.lenght).toBe(1);
    });
    it('should show data as a string', function () {
        list.addToEnd(5);
        list.addToEnd(10);
        (0, globals_1.expect)(list.showData()).toBe('5 10 ');
    });
});
describe('LinkedList Additional Tests', function () {
    var list;
    beforeEach(function () {
        list = new linkedList_1.LinkedList();
    });
    it('should handle adding multiple nodes to the start', function () {
        list.addToStart(10);
        list.addToStart(20);
        list.addToStart(30);
        (0, globals_1.expect)(list.showData()).toBe('30 20 10 ');
        (0, globals_1.expect)(list.lenght).toBe(3);
    });
    it('should handle adding multiple nodes to the end', function () {
        list.addToEnd(10);
        list.addToEnd(20);
        list.addToEnd(30);
        (0, globals_1.expect)(list.showData()).toBe('10 20 30 ');
        (0, globals_1.expect)(list.lenght).toBe(3);
    });
    it('should handle getting data by index out of range', function () {
        list.addToEnd(10);
        list.addToEnd(20);
        (0, globals_1.expect)(list.getByIndex(3)).toBeUndefined();
    });
    it('should update the data correctly by index', function () {
        list.addToEnd(10);
        list.addToEnd(20);
        list.addToEnd(30);
        list.updateByIndex(25, 1);
        (0, globals_1.expect)(list.showData()).toBe('10 25 30 ');
    });
    it('should not update the data if the index is out of range', function () {
        list.addToEnd(10);
        list.addToEnd(20);
        list.updateByIndex(25, 5);
        (0, globals_1.expect)(list.showData()).toBe('10 20 ');
    });
    it('should handle removing a node from an empty list', function () {
        list.removeFromEnd();
        (0, globals_1.expect)(list.header).toBeNull();
        (0, globals_1.expect)(list.lenght).toBe(0);
    });
    it('should handle removing the only node in the list', function () {
        list.addToEnd(10);
        list.removeFromEnd();
        (0, globals_1.expect)(list.header).toBeNull();
        (0, globals_1.expect)(list.lenght).toBe(0);
    });
    it('should handle removing by index correctly', function () {
        list.addToEnd(10);
        list.addToEnd(20);
        list.addToEnd(30);
        list.removeByIndex(1);
        (0, globals_1.expect)(list.showData()).toBe('10 30 ');
        (0, globals_1.expect)(list.lenght).toBe(2);
    });
    it('should not remove by index if the index is out of range', function () {
        list.addToEnd(10);
        list.addToEnd(20);
        list.removeByIndex(5);
        (0, globals_1.expect)(list.showData()).toBe('10 20 ');
        (0, globals_1.expect)(list.lenght).toBe(2);
    });
    it('should handle a complex sequence of operations', function () {
        list.addToEnd(10);
        list.addToStart(20);
        list.addToEnd(30);
        list.updateByIndex(25, 1);
        list.removeFromStart();
        list.removeByIndex(1);
        list.addToStart(5);
        (0, globals_1.expect)(list.showData()).toBe('5 25 ');
        (0, globals_1.expect)(list.lenght).toBe(2);
    });
});
