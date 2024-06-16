"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.Node = void 0;
/**
 *
 *
 * @export
 * @class Node
 */
var Node = /** @class */ (function () {
    /**
     * Creates an instance of Node.
     * @param {NodeType} data
     * @memberof Node
     */
    function Node(data) {
        this._data = data;
        this._next = null;
        this._index = -1;
    }
    Object.defineProperty(Node.prototype, "data", {
        /**
         *
         *
         * @type {NodeType}
         * @memberof Node
         */
        get: function () {
            return this._data;
        },
        /**
         *
         *
         * @memberof Node
         */
        set: function (data) {
            this._data = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "next", {
        /**
         *
         *
         * @type {(Node | null)}
         * @memberof Node
         */
        get: function () {
            return this._next;
        },
        /**
         *
         *
         * @memberof Node
         */
        set: function (node) {
            this._next = node;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "index", {
        /**
         *
         *
         * @type {number}
         * @memberof Node
         */
        get: function () {
            return this._index;
        },
        /**
         *
         *
         * @memberof Node
         */
        set: function (value) {
            this._index = value;
        },
        enumerable: false,
        configurable: true
    });
    return Node;
}());
exports.Node = Node;
/**
 *
 *
 * @export
 * @class LinkedList
 */
var LinkedList = /** @class */ (function () {
    /**
     * Creates an instance of LinkedList.
     * @memberof LinkedList
     */
    function LinkedList() {
        this._header = null;
        this._lenght = 0;
    }
    Object.defineProperty(LinkedList.prototype, "header", {
        /**
         *
        /**
         *
         *
         * @readonly
         * @type {(Node | null)}
         * @memberof LinkedList
         */
        get: function () {
            return this._header;
        },
        /**
         *
         *
         * @memberof LinkedList
         */
        set: function (node) {
            this._header = node;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkedList.prototype, "lenght", {
        /**
         *
         *
         * @type {number}
         * @memberof LinkedList
         */
        get: function () {
            return this._lenght;
        },
        /**
         *
         *
         * @memberof LinkedList
         */
        set: function (value) {
            this._lenght = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     *
     * @param {Node} node
     * @memberof LinkedList
     */
    LinkedList.prototype.setHeader = function (node) {
        node.index = 0;
        this._header = node;
        this._lenght++;
    };
    /**
     *
     *
     * @param {NodeType} data
     * @return {*}  {void}
     * @memberof LinkedList
     */
    LinkedList.prototype.addToEnd = function (data) {
        var node = new Node(data);
        node.index = this._lenght;
        if (!this._header) {
            this.setHeader(node);
            return;
        }
        ;
        var currentNode = this._header;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        ;
        if (currentNode) {
            currentNode.next = node;
            this._lenght++;
        }
        ;
        return;
    };
    ;
    /**
     *
     *
     * @param {NodeType} data
     * @return {*}  {void}
     * @memberof LinkedList
     */
    LinkedList.prototype.addToStart = function (data) {
        var node = new Node(data);
        if (!this._header) {
            this.setHeader(node);
            return;
        }
        var oldHeader = this._header;
        oldHeader.index = 1;
        node.index = 0;
        node.next = oldHeader;
        this._header = node;
        var currentNode = oldHeader.next;
        while (currentNode) {
            currentNode.index++;
            currentNode = currentNode.next;
        }
        this._lenght++;
        return;
    };
    ;
    /**
     *
     *
     * @param {number} idx
     * @param {boolean} [data=true]
     * @return {*}  {(Node| NodeType | undefined)}
     * @memberof LinkedList
     */
    LinkedList.prototype.getByIndex = function (idx, data) {
        if (data === void 0) { data = true; }
        if (idx >= 0 && idx < this._lenght && this._header) {
            if (idx === 0)
                return data ? this._header.data : this._header;
            var currentNode = this._header;
            while (currentNode.next) {
                currentNode = currentNode.next;
                if (idx === currentNode.index) {
                    return data ? currentNode.data : currentNode;
                }
            }
        }
    };
    /**
     *
     *
     * @memberof LinkedList
     */
    LinkedList.prototype.removeFromEnd = function () {
        if (this._lenght === 1) {
            this._header = null;
            this._lenght--;
        }
        if (this._lenght > 1) {
            var currentNode = this._header;
            var previousNode = null;
            if (currentNode) {
                while (currentNode.next) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                ;
                if (previousNode) {
                    previousNode.next = null;
                    this._lenght--;
                }
                ;
            }
        }
        return;
    };
    ;
    /**
     *
     *
     * @memberof LinkedList
     */
    LinkedList.prototype.removeFromStart = function () {
        var currentNode = this._header;
        if (currentNode) {
            this._header = currentNode.next;
            this._lenght--;
        }
        ;
        currentNode = this._header;
        while (currentNode) {
            currentNode.index--;
            currentNode = currentNode.next;
        }
        ;
        return;
    };
    /**
     *
     *
     * @return {*}  {string}
     * @memberof LinkedList
     */
    LinkedList.prototype.showData = function () {
        var strRepr = '';
        var currentNode = this._header;
        while (currentNode) {
            strRepr += "".concat(String(currentNode.data), " ");
            currentNode = currentNode.next;
        }
        ;
        return strRepr;
    };
    /**
     *
     *
     * @param {NodeType} data
     * @param {number} idx
     * @memberof LinkedList
     */
    LinkedList.prototype.updateByIndex = function (data, idx) {
        if (idx >= 0 && idx < this._lenght) {
            var node = this.getByIndex(idx, false);
            if (node) {
                node.data = data;
            }
            return;
        }
    };
    /**
     *
     *
     * @param {number} idx
     * @memberof LinkedList
     */
    LinkedList.prototype.removeByIndex = function (idx) {
        if (idx === 0) {
            this._header = this.getByIndex(idx + 1, false);
            if (this._header instanceof Node) {
                var currentNode = this._header;
                while (currentNode.next) {
                    currentNode.index--;
                    currentNode = currentNode.next;
                }
                ;
                this._lenght--;
            }
        }
        if (idx > 0 && idx < this._lenght) {
            var previousNode = this.getByIndex(idx - 1, false);
            var toDeleteNode = this.getByIndex(idx, false);
            if (toDeleteNode instanceof Node && previousNode instanceof Node) {
                previousNode.next = toDeleteNode.next;
                var currentNode = previousNode.next;
                while (currentNode) {
                    currentNode.index--;
                    currentNode = currentNode.next;
                }
                ;
                this._lenght--;
            }
        }
        ;
        return;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
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
