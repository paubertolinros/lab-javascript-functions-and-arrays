// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if(num1 < num2) {
    return num2;
  }else if(num2 < num1){
    return num1;
  }else {
    return num2;
  };
};

/* Find the maximum - SHORTER
  function maxOfTwoNumbers(num1, num2) {
  if (num1>num2) return num1;
  else return num2;
}*/

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(arr) {
  let longestWord = "";
  for(let i = 0; i < arr.length; i++){
    if (longestWord.length < arr[i].length){
    longestWord = arr[i];
    }; 
  };
  if(arr.length === 0){
    return null;
  }else {
    return longestWord;
  };
};

/* Iteration #2: Find longest word - SHORTER && FOR OF LOOP
function findLongestWord(arr) {
  if (arr.length === 0) return null;
  let longestWord = "";
  for(let words of arr){
    if (words.length > longestWord.length) {
      longestWord = words;
    };
  };
  return longestWord;
}; */
  

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArr) {
  let count = 0 ;
  for (let i = 0; i < numArr.length; i++){
    count += numArr[i]; 
  };
  if(numArr.length === 0) {
    return 0;
  } else {
    return count;
  }; 
};

/* Iteration #3: Calculate the sum - SHORTER && FOR OF LOOP
function sumNumbers(numArr) {
  if(numArr.length === 0) return 0;
  let totalSum = 0;
  for(let elemNumbers of numArr){
    totalSum += elemNumbers;
  };
  return totalSum;
}; */


// Iteration #3.1 Bonus:
function sum(mixElemArr) {
  if(mixElemArr.length === 0) return 0;
  let resultStrSum = 0;
  for(let element of mixElemArr) {
    if(typeof element  === 'string'){
      resultStrSum += element.length;
    } else if (typeof element === 'object'){
      throw new Error("Unsupported data type sir or ma'am"); 
    } else {
      resultStrSum += element
    };
  }; 
  return resultStrSum;
};

/* Iteration #3.1 Bonus: FOR EACH
function sum(mixElemArr) {
  if (mixElemArr.length === 0) return 0;
  let countTotalSum = 0;
  mixElemArr.forEach(function(elem){
    if (typeof elem === 'string') {
      countTotalSum += elem.length;
    } else if (typeof elem === 'object'){
      throw new Error("Unsupported data type sir or ma'am")
    } else {
      countTotalSum += elem;
    };
  });
  return countTotalSum;
};*/

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrToAvg) {
  let newCount = 0;
  for (let i = 0; i < arrToAvg.length; i++){
    newCount += arrToAvg[i]
  };
  let averageCount = newCount / arrToAvg.length;
  if(arrToAvg.length === 0) {
    return null;
  } else {
    return averageCount;
  }; 
};

/* Level 1: Array of numbers - SHORTER && FOR EACH
function averageNumbers(arrToAvg) {
  if(arrToAvg.length <= 0) return null;
  let numbersSumTotal = 0;
  arrToAvg.forEach(function(elem){
    numbersSumTotal += elem;
  });
  return numbersSumTotal/arrToAvg.length;
};*/


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arrStr) { 
  let totalCarachstr = "";
  for(let i = 0; i < arrStr.length; i++) {
    totalCarachstr += arrStr[i];
  };
  let lengthStrAvr = totalCarachstr.length;
  let averageStr = lengthStrAvr / arrStr.length;

  if(arrStr.length === 0) {
    return null;
  } else {
    return averageStr;
  }; 
};

/* Level 2: Array of strings - SHORTER && FOR EACH 
function averageWordLength(arrStr) {
  if (arrStr.length === 0) return null;
  let totalLengthWord = 0 ;
  arrStr.forEach(function(elem){
    totalLengthWord += elem.length;
  });
  return totalLengthWord/ arrStr.length;
}; */

// Bonus - Iteration #4.1
function avg(mixedElements) {
  if(mixedElements.length === 0) return null;
  let totalResult = 0;
  for(let mixElment of mixedElements) {
    if(typeof mixElment === 'string') {
      totalResult += mixElment.length;
    } else {
      totalResult += mixElment;
    };
  };
  let avgResult = totalResult / mixedElements.length;
  return avgResult;
};

/*Bonus - Iteration #4.1 - FOR LOOP
function avg(mixedElements) {
  if(mixedElements.length === 0) return null;
  let resultMixElem = 0;
  for(let i = 0; i < mixedElements.length; i++) {
    if (typeof mixedElements[i] === 'string') {
        resultMixElem += mixedElements[i].length;
    } else {
      resultMixElem += mixedElements[i]
    };
  };
  return resultMixElem / mixedElements.length
};*/

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(arrUni) {
  let newArrUni = [];
  for(let i = 0; i < arrUni.length; i++) {
    if(newArrUni.indexOf(arrUni[i]) === -1) {
    newArrUni.push(arrUni[i]);
    };
  };
  if(arrUni.length === 0){
    return null;
  } else {
    return newArrUni;
  };
};

/* Iteration #5: Unique arrays - SHORTER && FOR EACH
function uniquifyArray(arrUni) {
  if (arrUni.length === 0) return null;
  let uniqWords = [];
  arrUni.forEach(function(elem, i) {
    if(uniqWords.indexOf(elem) === -1){
       uniqWords.push(elem); 
       };
  });
  return uniqWords;
};*/


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arrWords,wordSearch) {
  for (let i = 0; i < arrWords.length; i++) {
    if(arrWords[i] === wordSearch) {
      return true;
    }; 
  };
  if(arrWords.length === 0) {
    return null;
  } else {
    return false;
  };
};

  /* Iteration #6: Find elements - SHORTER && FOR OF
  function doesWordExist(arrWords,wordSearch) {
    if (arrWords.length === 0) return null;
    for(let wordElem of arrWords) {
      if(wordElem === wordSearch) {
          return true;
      };
    };
    return false;
  };*/


// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(word, times) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === times) {
      count++ 
    };
  };
  if(word.length === 0) {
    return 0;
  } else {
    return count;
  };
};

/* Iteration #7: Count repetition - SHORTER && FOR EACH
function howManyTimes(arrWord, wordOffer) {
  if(arrWord.length === 0) return 0;
  let count = 0;
  arrWord.forEach(function(elem, i) {
    if(elem === wordOffer) {
      count ++
    };
  });
  return count
};*/

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];
// No me funciona porque está mal, no sé que hacer, he encontrado una solución en internet, 
//pero no la entiendo :´)
function greatestProduct(arrOfArray) {
  for(i = 0; i < arrOfArray.length; i++) {
    //console.log(arrOfArray[i])
    for(j = 0; j <= arrOfArray[i].length; j++) {
      for(k = 0; k <= arrOfArray[j].length; k++) {
        if (arrOfArray[j] === 2) {
          return 2;
        } else if (arrOfArray[j] === 1) {
          return 1;
        };
      };
    };
  }; 
};



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
