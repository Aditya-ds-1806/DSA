/* Implementation of Stack ADT using array (prototypes) */

function Stack() {
    this.entries = [];
    this.length = 0;
}

Stack.prototype = {
    push: function (data) {
        this.entries.push(data);
        this.length++;
        return this;
    },
    pop: function () {
        this.length--;
        return this.entries.pop();
    },
    top: function () {
        return this.entries[this.entries.length - 1];
    },
    size: function () {
        return this.length;
    },
    print: function () {
        console.log(this.entries);
    }
}

// driver code

var stack = new Stack();
stack.push(1).push(2).push(3).push(4).push(5).push(6).push('hello');
var removed = stack.pop();
console.log(`Removed = "${removed}". Top = ${stack.top()}. New stack size = ${stack.size()}`);
stack.print();
