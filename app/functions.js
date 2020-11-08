exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr); //passing in arguments to a function
    //or do: return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  // describe('functions', function() {
  //   var sayItCalled = false;
  //   var sayIt = function(greeting, name, punctuation) {
  //     sayItCalled = true;
  //     return greeting + ', ' + name + (punctuation || '!');
  //   };
  //
  //   beforeEach(function () {
  //     sayItCalled = false;
  //   });
  //
  // it('you should be able to change the context in which a function is called', function() {
  //   var speak = function() {
  //     return sayIt(this.greeting, this.name, '!!!');
  //   };
  //   var obj = {
  //     greeting: 'Hello',
  //     name: 'Rebecca'
  //   };
  //
  //   var result = functionsAnswers.speak(speak, obj);
  //   expect(result).to.eql('Hello, Rebecca!!!');
  //   expect(sayItCalled).to.be.ok;
  // });

  functionFunction: function(str) {
    return function(string) {
      return str + ', ' + string;
    };
  },

  makeClosures: function(arr, fn) {

  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
