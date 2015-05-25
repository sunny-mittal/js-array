function ListNode(value) {
  this.value = value;
  this.prev = null;
  this.next = null;
}

function List() {
  this.length = 0;
  this.head = null;
  this.tail = null;
  for (var arg of arguments) {
    this.push(arg);
  }
}

List.prototype.at = function(position) {
    
};

List.prototype.concat = function(element) {
    
};

List.prototype.copyWithin = function(target, start, end) {

};

List.prototype.entries = function() {
    
};

List.prototype.every = function(callback, context) {
    
};

List.prototype.fill = function(value, start, end) {
    
};

List.prototype.filter = function(callback, context) {
    
};

List.prototype.find = function(callback, context) {
    
};

List.prototype.findIndex = function(callback, context) {
    
};

List.prototype.forEach = function(callback, context) {
    
};

List.prototype.includes = function(search, from) {

};

List.prototype.indexOf = function(search, from) {
    
};

List.prototype.join = function(separator) {
    
};

List.prototype.keys = function() {
    
};

List.prototype.lastIndexOf = function(search, from) {
    
};

List.prototype.map = function(callback, context) {
    
};

List.prototype.pop = function() {
  if (this.length) {
    var node = this.tail;
    this.tail = this.tail.prev;
    this.length--;
    return node.value;
  } else {
    return undefined;
  }
};

List.prototype.push = function(element) {
  if (arguments.length === 1) {
    var node = new ListNode(element);
    if (this.head) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = this.tail.next;
    } else {
      this.head = this.tail = node;
    };
    this.length++;        
  } else {
    for (var arg of arguments) this.push(arg);
  };
  return this.length;
};

List.prototype.reduce = function(callback, initial) {
    
};

List.prototype.reduceRight = function(callback, initial) {
    
};

List.prototype.reverse = function() {
    
};

List.prototype.shift = function(elts) {

};

List.prototype.slice = function(begin, end) {
    
};

List.prototype.some = function(callback, context) {
    
};

List.prototype.sort = function(compareFn) {

};

List.prototype.splice = function(start, deleteCount, element) {
    
};

List.prototype.toString = function() {
    
};

List.prototype.unshift = function(element) {
    
};

List.prototype.values = function() {
    
};

module.exports = List;
