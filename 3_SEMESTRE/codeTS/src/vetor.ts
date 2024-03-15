export default class Vector<T> {
    private _elements: Array<T>;
    private _length!: number;

    constructor() {
        this._elements = [];
        this._length = 0;
    }
    public get elements(): Array<T> {
        return this._elements;
    }
    public get length(): number {
        return this._length;
    }
    public appendElement(element: T): void {
        this._elements[this._length] = element;
        this._length++;
    }
    public isEmpty(): boolean {
        return this._length === 0;
    }
    public toString(): string {
        let repr = "[";
        for (let i = 0; i < this._length - 1; i++) {
            repr += String(this._elements[i])
            repr += ','
        }
        if (this._length > 0) {
            repr += this._elements[this._length - 1];
        }
        repr += ']';
        return repr;
    }
    public getElementValueByPosition(position: number): T {
        if (!(position >= 0 && position < this._length)) {
            throw new Error("Posicao invalida");
        }
        return this._elements[position];
    }
    public searchElementeByValue(element: T): number {
        for (let i = 0; i < this._length; i++) {
            if (this._elements[i] === element) {
                return i;
            }
        }
        return -1;
    }
    public addElementToAnyPosition(position: number, element: T): boolean {
        if (position === this._length) {
            this._elements[position] = element;
            this._length++;
            return true;
        }
        if (!(position >= 0 && position < this._length)) {
            throw new Error("Posicao invalida");
        }
        for (let i = this._length - 1; i >= position; i--) {
            this._elements[i + 1] = this._elements[i];
        }
        this._elements[position] = element;
        this._length++;
        return true;
    }
    public removeElementByPosition(position: number): T {
        if (!(position >= 0 && position < this._length)) {
            throw new Error("Posicao invalida");
        }
        let toBeRemoved = this._elements[position];
        for (let i = position; i < this._length - 1; i++) {
            this._elements[i] = this._elements[i + 1];
        }
        this._length--;
        return toBeRemoved;
    }

    public removeElementByvalue(element: T): T | null {
        let result = null
        for (let i = 0; i < this._length - 1; i++) {
            if (this._elements[i] === element) {
                result = element
                for (let j = i; j < this._length - 1; j++) {
                    this._elements[j] = this._elements[j + 1];
                }
                this._length--;
            };
        }
        return result
    }
}

