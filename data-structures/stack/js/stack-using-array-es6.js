/* Implementation of Stack ADT using array (ES6 classes) */

class Stack {
    constructor() {
        this.entries = [];
        this.length = 0;
    }

    push(data) {
        this.entries.push(data);
        this.length++;
        return this;
    }

    pop() {
        this.length--;
        return this.entries.pop();
    }

    top() {
        return this.entries[this.entries.length - 1];
    }

    size() {
        return this.length;
    }

    print() {
        console.log(this.entries);
    }
}

// driver code

const stack = new Stack();
stack.push(1).push(2).push(3).push(4).push(5).push(6).push('hello');
const removed = stack.pop();
console.log(`Removed = "${removed}". Top = ${stack.top()}. New stack size = ${stack.size()}`);
stack.print();
