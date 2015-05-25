var ListNode = function(value) {
  Object.defineProperties(this, {
    'value': { value: value },
    'prev': { value: null, writable: true },
    'next': { value: null, writable: true }
  });
}

var List = function() {
  Object.defineProperties(this, {
    'length': { value: 0, writable: true },
    'head': { value: null, writable: true },
    'tail': { value: null, writable: true }
  });
  for (var arg of arguments) {
    this.push(arg);
  }
}

var ListIterator = function(list, type) {
  var pos = -1, done = false;
  return {
    next: function() {
      if (!done) {
        pos++;
        done = pos === list.length;
      }
      switch(type) {
        case 'e':
          return {
            value: new List(pos, list.at(pos)),
            done: done
          };
        case 'k':
          return {
            value: pos,
            done: done
          };
        case 'v':
          return {
            value: list.at(pos),
            done: done
          };
      }
    }
  }
}

function seekList(list, pos) {
  var node = list.head;
  for (var i = 0; i < Math.min(list.length - 1, pos); i++) {
    node = node.next;
  }
  return node;
}

function link(a, b) {
  try {
    a.next = b;
  } catch (e) {
    console.log('a is null');
    this.head = b;
  }
  try {
    b.prev = a;
  } catch (e) {
    this.tail = a;
  }
}

List.from = function(list) {
  var newList = new List();
  while (list) {
    newList.push(list.value);
    list = list.next;
  }
  return newList;
}

List.prototype.at = function(position) {
  if (position >= this.length) return undefined;
  for (var i = 0, node = this.head; i < position; i++) {
    node = node.next;
  }
  return node.value;
}

List.prototype.concat = function(element) {
    
}

List.prototype.copyWithin = function(target, start, end) {

}

List.prototype.entries = function() {
  return new ListIterator(this, 'e');
}

List.prototype.every = function(callback, context) {
  for (var i = 0, node = this.head; i < this.length; i++, node = node.next) {
    if (!(context ? callback.call(context, node.value, i, this) : callback(node.value, i, this))) return false;
  }
  return true;
}

List.prototype.fill = function(value, start, end) {
    
}

List.prototype.filter = function(callback, context) {
    
}

List.prototype.find = function(callback, context) {
  for (var i = 0, node = this.head; i < this.length; i++, node = node.next) {
    if (context ? callback.call(context, node.value, i, this) : callback(node.value, i, this)) return node.value;
  }
  return undefined;
}

List.prototype.findIndex = function(callback, context) {
  for (var i = 0, node = this.head; i < this.length; i++, node = node.next) {
    if (context ? callback.call(context, node.value, i, this) : callback(node.value, i, this)) return i;
  }
  return -1;  
}

List.prototype.forEach = function(callback, context) {
  for (var i = 0, node = this.head; i < this.length; i++, node = node.next) {
    context ? callback.call(context, node.value, i, this) : callback(node.value, i, this);
  }  
}

List.prototype.includes = function(search, from) {
  var i = from || 0;
  for (var node = this.head; i < this.length; i++, node = node.next) {
    if (node.value === search) return true;
  }
  return false;
}

List.prototype.indexOf = function(search, from) {
    
}

List.prototype.join = function(separator) {
    
}

List.prototype.keys = function() {
  return new ListIterator(this, 'k');
}

List.prototype.lastIndexOf = function(search, from) {
    
}

List.prototype.map = function(callback, context) {
  var newList = new List();
  for (var i = 0, node = this.head; i < this.length; i++, node = node.next) {
    newList.push(context ? callback.call(context, node.value, i, this) : callback(node.value, i, this));
  }
  return newList;  
}

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
}

List.prototype.push = function(element) {
  if (arguments.length === 1) {
    var node = new ListNode(element);
    if (this.head) {
      link(this.tail, node);
      this.tail = node;
    } else {
      this.head = this.tail = node;
    }
    this.length++;        
  } else {
    for (var arg of arguments) this.push(arg);
  }
  return this.length;
}

List.prototype.reduce = function(callback, initial) {
  if (!this.head) return initial;
  var res, i, node;
  if (initial === undefined) {
    res = this.head.value;
    i = 1;
    if (this.length > 1) node = this.head.next;
  } else {
    res = initial;
    i = 0;
    node = this.head;
  }
  for (; i < this.length; i++, node = node.next) {
    res = callback(res, node.value, i, this);
  }
  return res;
}

List.prototype.reduceRight = function(callback, initial) {
  if (!this.tail) return initial;
  var res, i, node;
  if (initial === undefined) {
    res = this.tail.value;
    i = 1;
    if (this.length > 1) node = this.tail.prev;
  } else {
    res = initial;
    i = 0;
    node = this.tail;
  }
  for (; i < this.length; i++, node = node.prev) {
    res = callback(res, node.value, i, this);
  }
  return res;
}

List.prototype.reverse = function() {
  var holder = new ListNode(null);
  var tail = holder.next = this.tail;
  while (tail) {
    tail.next = tail.prev;
    tail = tail.next;
  }
  var head = this.head = holder.next;
  while(head) {
    link.call(this, head, head.next);
    head = head.next;
  }
  this.head.prev = null;
  return this;
}

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
}

List.prototype.slice = function(begin, end) {
  var newList = new List(), node = this.head;
  if (begin === undefined) return this;
  else begin = begin >= 0 ? begin : this.length + begin;
  if (end === undefined) end = this.length;
  else end = end >= 0 ? end : this.length + end;
  if (begin >= 0 && begin < this.length) {
    for (var i = 0; i < begin; i++, node = node.next) {}
    for (var i = 0, len = end - begin; i < len; i++, node = node.next) {
      newList.push(node.value);
    }
  }
  return newList;
}

List.prototype.some = function(callback, context) {
  for (var i = 0, node = this.head; i < this.length; i++, node = node.next) {
    if (context ? callback.call(context, node.value, i, this) : callback(node.value, i, this)) return true;
  }
  return false;
}

List.prototype.sort = function(compareFn) {

}

List.prototype.splice = function(start, deleteCount) {
  if (start === undefined || start >= this.length) return new List();
  switch (arguments.length) {
    case 1:
      var node = seekList(this, start);
      this.tail = node.prev;
      node.prev ? node.prev.next = null : this.head = null;
      this.length = start;
      return List.from(node);
      break;
    case 2:
      if (deleteCount === 0) return new List();
      var sliceStart = seekList(this, start);
      var sliceEnd = seekList(this, start + deleteCount - 1);
      link.call(this, sliceStart.prev, sliceEnd.next);
      sliceEnd.next = null;
      this.length = (this.length - deleteCount) || 0;
      return List.from(sliceStart);
      break;
    default:
      var list = new List();
      for (var i = 2; i < arguments.length; i++) {
        list.push(arguments[i]);
      }
      switch (deleteCount) {
        case 0:
          var node = seekList(this, start);
          link.call(this, node.prev, list.head);
          link(list.tail, node);
          this.length += list.length;
          return new List();  
          break;
        default:
          var sliceStart = seekList(this, start);
          var sliceEnd = seekList(this, start + deleteCount - 1);
          link.call(this, sliceStart.prev, list.head);
          link.call(this, list.tail, sliceEnd.next);
          sliceEnd.next = null;
          this.length = Math.max(this.length - deleteCount, 0) + list.length;
          return List.from(sliceStart);
      }
  }
}

List.prototype.toString = function() {
  var str = '';
  for (var i = 0, node = this.head; i < this.length; i++, node = node.next) {
    str += node.value;
    if (i !== this.length - 1) str += ',';
  }
  return str;
}

List.prototype.unshift = function(element) {
  var node = new ListNode(element);
  link(node, this.head);
  this.head = node;
  this.length++;
  return this;
}

List.prototype.values = function() {
  return new ListIterator(this, 'v');
}

module.exports = List;
