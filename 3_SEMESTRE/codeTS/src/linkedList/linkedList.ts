type NodeType = number | string;
/**
 *
 *
 * @export
 * @class Node
 */
export class Node {
  private _data: NodeType;
  private _next: Node | null;
  private _index: number;
  /**
   * Creates an instance of Node.
   * @param {NodeType} data
   * @memberof Node
   */
  constructor(data: NodeType) {
    this._data = data;
    this._next = null;
    this._index = -1;
  }
  /**
   *
   *
   * @type {NodeType}
   * @memberof Node
   */
  public get data(): NodeType {
    return this._data;
  }
  /**
   *
   *
   * @memberof Node
   */
  public set data(data: NodeType) {
    this._data = data;
  }
  /**
   *
   *
   * @type {(Node | null)}
   * @memberof Node
   */
  public get next(): Node | null {
    return this._next;
  }
  /**
   *
   *
   * @memberof Node
   */
  public set next(node: Node | null) {
    this._next = node;
  }
  /**
   *
   *
   * @type {number}
   * @memberof Node
   */
  public get index(): number {
    return this._index;
  }
  /**
   *
   *
   * @memberof Node
   */
  public set index(value: number) {
    this._index = value;
  }
}
/**
 *
 *
 * @export
 * @class LinkedList
 */
export class LinkedList {
  private _header: Node | null;
  private _lenght: number;
  /**
   * Creates an instance of LinkedList.
   * @memberof LinkedList
   */
  constructor() {
    this._header = null;
    this._lenght = 0;
  }
  /**
   * 
  /**
   *
   *
   * @readonly
   * @type {(Node | null)}
   * @memberof LinkedList
   */
  public get header(): Node | null {
    return this._header;
  }
  /**
   *
   *
   * @memberof LinkedList
   */
  public set header(node: Node | null) {
    this._header = node;
  }
  /**
   *
   *
   * @type {number}
   * @memberof LinkedList
   */
  public get lenght(): number {
    return this._lenght;
  }
  /**
   *
   *
   * @memberof LinkedList
   */
  public set lenght(value: number) {
    this._lenght = value;
  }
  /**
   *
   *
   * @param {Node} node
   * @memberof LinkedList
   */
  public setHeader(node: Node): void {
    node.index = 0;
    this._header = node;
    this._lenght++;
  }

  /**
   *
   *
   * @param {NodeType} data
   * @return {*}  {void}
   * @memberof LinkedList
   */
  public addToEnd(data: NodeType): void {
    const node = new Node(data);
    node.index = this._lenght;
    if (!this._header) {
      this.setHeader(node);
      return;
    }
    let currentNode: Node | null = this._header;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    if (currentNode) {
      currentNode.next = node;
      this._lenght++;
    }
    return;
  }
  /**
   *
   *
   * @param {NodeType} data
   * @return {*}  {void}
   * @memberof LinkedList
   */

  public addToStart(data: NodeType): void {
    const node = new Node(data);
    if (!this._header) {
      this.setHeader(node);
      return;
    }
    const oldHeader = this._header;
    oldHeader.index = 1;
    node.index = 0;
    node.next = oldHeader;
    this._header = node;
    let currentNode = oldHeader.next;
    while (currentNode) {
      currentNode.index++;
      currentNode = currentNode.next;
    }
    this._lenght++;
    return;
  }

  /**
   *
   *
   * @param {number} idx
   * @param {boolean} [data=true]
   * @return {*}  {(Node| NodeType | undefined)}
   * @memberof LinkedList
   */
  public getByIndex(idx: number, data: boolean = true): Node | NodeType | undefined {
    if (idx >= 0 && idx < this._lenght && this._header) {
      if (idx === 0) return data ? this._header.data : this._header;
      let currentNode = this._header;
      while (currentNode.next) {
        currentNode = currentNode.next;
        if (idx === currentNode.index) {
          return data ? currentNode.data : currentNode;
        }
      }
    }
  }
  /**
   *
   *
   * @memberof LinkedList
   */
  public removeFromEnd(): void {
    if (this._lenght === 1) {
      this._header = null;
      this._lenght--;
    }
    if (this._lenght > 1) {
      let currentNode: Node | null = this._header;
      let previousNode: Node | null = null;
      if (currentNode) {
        while (currentNode.next) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        if (previousNode) {
          previousNode.next = null;
          this._lenght--;
        }
      }
    }
    return;
  }
  /**
   *
   *
   * @memberof LinkedList
   */
  public removeFromStart(): void {
    let currentNode: Node | null = this._header;
    if (currentNode) {
      this._header = currentNode.next;
      this._lenght--;
    }
    currentNode = this._header;
    while (currentNode) {
      currentNode.index--;
      currentNode = currentNode.next;
    }
    return;
  }

  /**
   *
   *
   * @return {*}  {string}
   * @memberof LinkedList
   */
  public showData(): string {
    let strRepr: string = '';
    let currentNode: Node | null = this._header;
    while (currentNode) {
      strRepr += `${String(currentNode.data)} `;
      currentNode = currentNode.next;
    }
    return strRepr;
  }
  /**
   *
   *
   * @param {NodeType} data
   * @param {number} idx
   * @memberof LinkedList
   */
  public updateByIndex(data: NodeType, idx: number): void {
    if (idx >= 0 && idx < this._lenght) {
      const node = this.getByIndex(idx, false) as Node;
      if (node) {
        node.data = data;
      }
      return;
    }
  }

  /**
   *
   *
   * @param {number} idx
   * @memberof LinkedList
   */
  public removeByIndex(idx: number): void {
    if (idx === 0) {
      this._header = this.getByIndex(idx + 1, false) as Node;
      if (this._header instanceof Node) {
        let currentNode = this._header;
        while (currentNode.next) {
          currentNode.index--;
          currentNode = currentNode.next;
        }
        this._lenght--;
      }
    }
    if (idx > 0 && idx < this._lenght) {
      const previousNode = this.getByIndex(idx - 1, false) as Node;
      const toDeleteNode = this.getByIndex(idx, false) as Node;
      if (toDeleteNode instanceof Node && previousNode instanceof Node) {
        previousNode.next = toDeleteNode.next;
        let currentNode = previousNode.next;
        while (currentNode) {
          currentNode.index--;
          currentNode = currentNode.next;
        }
        this._lenght--;
      }
    }
    return;
  }
}

// const linkedList = new LinkedList();
// linkedList.addToEnd(1); // 1
// linkedList.addToEnd(2); // 1 2
// linkedList.addToEnd(3); // 1 2 3
// linkedList.addToStart(4); // 4 1 2 3
// linkedList.removeFromEnd(); // 4 1 2
// console.log(linkedList);
// console.log(linkedList.getByIndex(1));
// linkedList.updateByIndex(5, 1); // 4 5 2
// linkedList.removeByIndex(1);
// console.log(linkedList.showData());
