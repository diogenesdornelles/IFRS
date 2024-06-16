import { expect, test } from '@jest/globals';
import { Node, LinkedList } from './linkedList';

describe('Node Class', () => {
  it('should create a new node with the given data', () => {
    const node = new Node(5);
    expect(node.data).toBe(5);
    expect(node.next).toBeNull();
    expect(node.index).toBe(-1);
  });

  it('should set and get the data of the node', () => {
    const node = new Node(5);
    node.data = 10;
    expect(node.data).toBe(10);
  });

  it('should set and get the next node', () => {
    const node1 = new Node(5);
    const node2 = new Node(10);
    node1.next = node2;
    expect(node1.next).toBe(node2);
  });

  it('should set and get the index of the node', () => {
    const node = new Node(5);
    node.index = 0;
    expect(node.index).toBe(0);
  });
});

describe('LinkedList Class', () => {
  let list: LinkedList;

  beforeEach(() => {
    list = new LinkedList();
  });

  it('should initialize with a null header and length 0', () => {
    expect(list.header).toBeNull();
    expect(list.lenght).toBe(0);
  });

  it('should add a node to the start', () => {
    list.addToStart(5);
    expect(list.header?.data).toBe(5);
    expect(list.lenght).toBe(1);
  });

  it('should add a node to the end', () => {
    list.addToEnd(5);
    list.addToEnd(10);
    expect(list.header?.next?.data).toBe(10);
    expect(list.lenght).toBe(2);
  });

  it('should get a node by index', () => {
    list.addToEnd(5);
    list.addToEnd(10);
    expect(list.getByIndex(1)).toBe(10);
  });

  it('should remove a node from the start', () => {
    list.addToEnd(5);
    list.addToEnd(10);
    list.removeFromStart();
    expect(list.header?.data).toBe(10);
    expect(list.lenght).toBe(1);
  });

  it('should remove a node from the end', () => {
    list.addToEnd(5);
    list.addToEnd(10);
    list.removeFromEnd();
    expect(list.header?.next).toBeNull();
    expect(list.lenght).toBe(1);
  });

  it('should update a node by index', () => {
    list.addToEnd(5);
    list.addToEnd(10);
    list.updateByIndex(15, 1);
    expect(list.getByIndex(1)).toBe(15);
  });

  it('should remove a node by index', () => {
    list.addToEnd(5);
    list.addToEnd(10);
    list.removeByIndex(0);
    expect(list.header?.data).toBe(10);
    expect(list.lenght).toBe(1);
  });

  it('should show data as a string', () => {
    list.addToEnd(5);
    list.addToEnd(10);
    expect(list.showData()).toBe('5 10 ');
  });
});


describe('LinkedList Additional Tests', () => {
  let list: LinkedList;

  beforeEach(() => {
    list = new LinkedList();
  });

  it('should handle adding multiple nodes to the start', () => {
    list.addToStart(10);
    list.addToStart(20);
    list.addToStart(30);
    expect(list.showData()).toBe('30 20 10 ');
    expect(list.lenght).toBe(3);
  });

  it('should handle adding multiple nodes to the end', () => {
    list.addToEnd(10);
    list.addToEnd(20);
    list.addToEnd(30);
    expect(list.showData()).toBe('10 20 30 ');
    expect(list.lenght).toBe(3);
  });

  it('should handle getting data by index out of range', () => {
    list.addToEnd(10);
    list.addToEnd(20);
    expect(list.getByIndex(3)).toBeUndefined();
  });

  it('should update the data correctly by index', () => {
    list.addToEnd(10);
    list.addToEnd(20);
    list.addToEnd(30);
    list.updateByIndex(25, 1);
    expect(list.showData()).toBe('10 25 30 ');
  });

  it('should not update the data if the index is out of range', () => {
    list.addToEnd(10);
    list.addToEnd(20);
    list.updateByIndex(25, 5);
    expect(list.showData()).toBe('10 20 ');
  });

  it('should handle removing a node from an empty list', () => {
    list.removeFromEnd();
    expect(list.header).toBeNull();
    expect(list.lenght).toBe(0);
  });

  it('should handle removing the only node in the list', () => {
    list.addToEnd(10);
    list.removeFromEnd();
    expect(list.header).toBeNull();
    expect(list.lenght).toBe(0);
  });

  it('should handle removing by index correctly', () => {
    list.addToEnd(10);
    list.addToEnd(20);
    list.addToEnd(30);
    list.removeByIndex(1);
    expect(list.showData()).toBe('10 30 ');
    expect(list.lenght).toBe(2);
  });

  it('should not remove by index if the index is out of range', () => {
    list.addToEnd(10);
    list.addToEnd(20);
    list.removeByIndex(5);
    expect(list.showData()).toBe('10 20 ');
    expect(list.lenght).toBe(2);
  });

  it('should handle a complex sequence of operations', () => {
    list.addToEnd(10);
    list.addToStart(20);
    list.addToEnd(30);
    list.updateByIndex(25, 1);
    list.removeFromStart();
    list.removeByIndex(1);
    list.addToStart(5);
    expect(list.showData()).toBe('5 25 ');
    expect(list.lenght).toBe(2);
  });
});