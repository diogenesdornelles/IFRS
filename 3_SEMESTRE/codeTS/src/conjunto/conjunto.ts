export class Conjunto {
  private _items: Record<any, any>;
  constructor() {
    this._items = {};
  }
  public has(element: any): boolean {
    return Object.prototype.hasOwnProperty.call(this._items, element);
  }
  public add(element: any) {
    if (!this.has(element)) {
      this._items[element] = element;
      return true;
    }
    return false;
  }
  delete(element: any) {
    if (this.has(element)) {
      delete this._items[element];
      return true;
    }
    return false;
  }
  public clear() {
    this._items = {}; // {2}
  }
  public size() {
    let count = 0;
    for (let key in this._items) { // {2}
      if (this._items.hasOwnProperty(key)) { // {3}
        count++; // {4}
      }
    }
    return count;
  }
  public values() {
    let values = [];
    for (let key in this._items) { // {1}
      if (this._items.hasOwnProperty(key)) { // {2}
        values.push(key);
      }
    }
    return values;
  };
  uniao(otherSet: Conjunto): Conjunto {
    const uniaoSet = new Conjunto();
    let this_values = this.values();
    for (let i = 0; i < this_values.length; i++) {
      uniaoSet.add(this_values[i]);
    }
    let other_values = otherSet.values();
    for (let i = 0; i < other_values.length; i++) {
      uniaoSet.add(other_values[i]);
    }
    return uniaoSet;
  };

  interseccao(otherSet: Conjunto): Conjunto {
    const interseccaoSet = new Conjunto();
    let this_values = this.values();
    for (let i = 0; i < this_values.length; i++) {
      if (otherSet.has(this_values[i])) {
        interseccaoSet.add(this_values[i]);
      }
    }
    return interseccaoSet
  }
  diferenca(otherSet: Conjunto): Conjunto {
    const diferencaSet = new Conjunto();
    let this_values = this.values();
    for (let i = 0; i < this_values.length; i++) {
      if (!otherSet.has(this_values[i])) {
        diferencaSet.add(this_values[i]);
      }
    }
    let other_values = otherSet.values();
    for (let i = 0; i < other_values.length; i++) {
      if (!this.has(other_values[i])) {
        diferencaSet.add(other_values[i]);
      }
    }
    return diferencaSet
  }
  eSubConjuntoDe(otherSet: Conjunto): boolean {
    let this_values = this.values();
    for (let i = 0; i < this_values.length; i++) {
      if (!otherSet.has(this_values[i])) {
        return false;
      }
    }
    return true;
  }
}
