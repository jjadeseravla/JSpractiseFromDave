exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      return arr.indexOf(item);
  },

  sum: function(arr) {
    const reducer = (sum, val) => sum + val;
    const initialVal = 0;
    return arr.reduce(reducer, initialVal);
  },

  remove: function(arr, item) {
    return arr.filter(function(element) { //filter always returns a new array to you
      return element !== item;
    })
  },

  removeWithoutCopy: function(arr, item) {
    var i;
    var len;
    for (i = 0, len = arr.length; i<len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    let newArr;
    newArr = arr.concat(item)
    return newArr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.splice(0, 0, item); //unshift()
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = arr.reduce(function(n, val) {
      return n + (val === item)
    }, 0);
    return count;
  },

  duplicates: function(arr) {
    let sorted_arr = arr.slice().sort();
    let results = [];
    for (let i = 0; i < sorted_arr.length -1; i++) {
      if (sorted_arr[i+1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    var unique = results.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    })
    return unique;
  },

  square: function(arr) {
    return arr.map(x => Math.pow(x,2));

  },

  findAllOccurrences: function(arr, target) {
    var newArr = [];
    for ( var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        newArr.push(i);
      }
    }
    return newArr;
  }
};
