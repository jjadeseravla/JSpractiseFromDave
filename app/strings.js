exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {

  reduceString: function(str, amount) {
    //let hashMap = {};
    let chars = str.split('');
    let sting = "";

    // for ( var i = 0; i < chars.length; i++) {
    //   if( hashMap[chars[i]]) {
    //      hashMap[chars[i]] ++;
    //   } else {
    //     hashMap[chars[i]] = 1;
    //   }
    // }
    var hashMap = chars.reduce(function (acc, curr) { //acc is the accumulator hashMap
      if( acc[curr]) {
         acc[curr] ++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});


    var newArr = Object.keys(hashMap) //gives array of keys

    // for ( var i = 0; i < newArr.length; i++) {
    //   console.log("in");
    //   const value = hashMap[newArr[i]]; //same as hashmap.a to get value
    //
    //   if ( value > amount) {
    //     hashMap[newArr[i]] = amount
    //     console.log(hashMap);
    //   }
    // }

    var hashMap2 = newArr.reduce(function (acc, curr) {
      if (acc[curr] > amount) {
        acc[curr] = amount
      }
      return acc;
    }, hashMap); //so first iteration has hashmap object there not empty {}

    var newArr2 = Object.keys(hashMap2) //gives array of keys

    let result = [];
    for ( var i = 0; i < newArr2.length; i++) { //[a, b]
      //print out key, the object amount of times
      const amount2 = hashMap2[newArr2[i]];
      for (var j = 0; j < new Array(amount2).length; j++) { //creating an array with length of 2
        result.push(newArr2[i])
      }
    }
    return result.join("");

  },
  //   let chars = str.split('').sort();
  //   let count = 0;
  //   let result = "";
  //
  //   if (chars)
  //
  //   for ( var i = 0; i < chars.length; i++) {
  //     if (chars[i] === chars[i + 1]) { //true is a is a
  //       if (count < amount) { //0 < 2
  //         count ++; //add 1 to count
  //         result += chars[i]; //result = a
  //       }
  //     } else {
  //       count = 0;
  //       //if (chars.find(letter => letter[i]))
  //       //result += chars[i];
  //     }
  //   };
  //   console.log(result);
  //   return result;
  // },
  //'aaaabbbb', 2)).to.eql('aabb');




  wordWrap: function(str, cols) {

  },

    reverseString: function(str) {
      var charArr = str.split(" ");
      //console.log(charArr);
      var reverse = charArr.map(function (element) {
        return element.split("").reverse().join("");
      }).reverse().join(" ");

    return reverse;
  }
}
