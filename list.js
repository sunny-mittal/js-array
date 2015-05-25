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
  if (position >= this.length) return undefined;
  for (var i = 0, node = this.head; i < position; i++, node = node.next) {}
  return node.value;
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
  var newList = new List();
  for (var i = 0, node = this.head; i < this.length; i++, node = node.next) {
    newList.push(context ? callback.call(context, node.value, i, this) : callback(node.value, i, this));
  };
  return newList;  
};

List.prototype.pop = function() {
  if (this.length) {
    var node = this.tail;
    this.tail = node.prev;
    this.length--;
    if (this.length === 0) this.head = this.tail = null;
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

List.prototype.shift = function() {
  if (this.length) {
    var node = this.head;
    this.head = node.next;
    this.length--;
    if (this.length === 0) this.tail = this.head = null;
    return node.value;
  } else {
    return undefined;
  }
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
  var str = '';
  for (var i = 0, node = this.head; i < this.length; i++, node = node.next) {
    str += node.value;
    if (i !== this.length - 1) str += ',';
  };
  return str;
};

List.prototype.unshift = function(element) {
    var node = new ListNode(element);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
};

List.prototype.values = function() {
    
};

module.exports = List;
