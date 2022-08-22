//1. Reverse a number
function flipInt(n){
    let digit, result = 0

    while(n){
        digit = n % 10;
        result = (result * 10) + digit;
        n = Math.floor(n/10);
    }
    return result;
}

//console.log(flipInt(32243))

//2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
function checkPalindrome(s) {
    let left = 0
    let right = s.length - 1
    while (left < right) {
        
        if (s[left] !== s[right]) return false
        left++;
        right--;
    }
    return true
}

//console.log(checkPalindrome("abca"))


//3. Write a JavaScript function that generates all combinations of a string.

function substring(s){
    let i, j, res = [];
    for (i = 0; i < s.length; i++) {
        for (j = i + 1; j < s.length + 1; j ++) {
            res.push(s.slice(i, j));
        }
    }
    return res;
}

//console.log(substring('dog'))


//4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
function makeOrder(s) {
    let arr = s.split('');
    alpha = arr.sort();
    let reorder = alpha.join('');

    return reorder;
}

//console.log(makeOrder('happy'))

//5.Write a JavaScript function that accepts a string as a parameter and converts the first letter of
//each word of the string in upper case. 
function firstUpper(s) {
    let arr = s.split(' ');
    //console.log(arr)
    for (let i = 0; i < arr.length; i ++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
}

//console.log(firstUpper('this is a great world'))

//6.Write a JavaScript function that accepts a string as a parameter and find the longest word
//within the string.
function longestWord(s) {
    let arr = s.split(' ');
    let max_length = 0;
    let max_word = '';
    for (let i = 0; i < arr.length; i ++){
        if (arr[i].length > max_length){
            max_length = arr[i].length;
            max_word = arr[i];
        }
    }
    return max_word;
}

//console.log(longestWord('I am a very beautiful woman'));

//7. Write a JavaScript function that accepts a string as a parameter and counts the number of
//vowels within the string. 

function findVowel(s) {
    let arr = s.split('');
    let count = 0;
    for (let i = 0; i < arr.length; i ++) {
        if ('aeiou'.includes(arr[i].toLowerCase())) {
            count += 1;
        }
    }
    return count;
}

//console.log(findVowel('so Happy to HEAR that'));

//8. Write a JavaScript function that accepts a number as a parameter and check the number is
//prime or not. 

function isPrime(n) {
    for (var i = 2; i < n; i++) { // i will always be less than the parameter so the condition below will never allow parameter to be divisible by itself ex. (7 % 7 = 0) which would return true
      if(n % i === 0) return false; // when parameter is divisible by i, it's not a prime number so return false
    }
    return n > 1; // otherwise it's a prime number so return true (it also must be greater than 1, reason for the n > 1 instead of true)
  }
  
//console.log(isPrime(15));

//9. Write a JavaScript function which accepts an argument and returns the type.
function findType(data) {
    return typeof data;
  }

//console.log(detect_data_type('w3resource'));
//console.log(detect_data_type(false));


//10.Write a JavaScript function which returns the n rows by n columns identity matrix. 
function identityMatrix(n) {
    const res = [];
    for (let i = 0; i < n; i ++) {
        if (!res[i]) {
            res[i] = [];
        }
        for (let j = 0; j < n; j ++) {
            if (!res[i][j]){
                res[i][j] = 0;
            }
        }
    }
    return res;
}

//console.log(identityMatrix(5));



//11. Write a JavaScript function which will take an array of numbers stored and find the second
//lowest and second greatest numbers, respectively. 

function findSecondLowest (nums) {
    let arr = nums.sort()
    if (arr.length > 1) {
        return arr[1];
    } else {
        return null;
    }
}

function findSecondGreatest (nums) {
    let arr = nums.sort()
    if (arr.length > 1) {
        return arr[arr.length - 2];
    } else {
        return null;
    }
}

//console.log(findSecondLowest([1,2,5,7]));
//console.log(findSecondGreatest([1,4,8,2]));

//12. Write a JavaScript function which says whether a number is perfect. 

function isPerfect(num) {
    let tot = 0
    for (let i = 1; i < num; i ++) {
        if (num % i === 0) {
            tot += i;
        }
    }
    if (tot === num){
        return true;
    } else {
        return false;
    }
}

//console.log(isPerfect(8));
//console.log(isPerfect(28));

//13.Write a JavaScript function to compute the factors of a positive integer. 
function findFactor(num) {
    let factors = []
    for (let i = 0; i < num + 1; i++) {
        if (num % i == 0){
            factors.push(i);
        }
    }
    return factors;
}

//console.log(findFactor(10));
//console.log(findFactor(9));

//14. Write a JavaScript function to convert an amount to coins. 

function convertAmountToCoins(obj) {
    if (obj[0] == 0) return [];
    let amount = obj[0];
    let coins = obj[1].sort((a, b) => { return b - a;});
    let res = [], i = 0;
    while (amount > 0 && i < coins.length) {
        if (amount >= coins[i]) {
            amount -= coins[i];
            res.push(coins[i]);
        } else {
            i++;
        }
    }
    return res;
}

//15, Write a JavaScript function to compute the value of bn where n is the exponent and b is the
//bases. Accept b and n from the user and display the result. 

function calculate(b, n) {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
        ans *= b;
    }
    return ans;
}

//console.log(calculate(2,5));

//16.Write a JavaScript function to extract unique characters from a string.

function uniqueChar(s) {
    let obj = new Object();

    for (let i = 0; i < s.length; i++) {
        let chr = s[i];
        if (chr in obj)
        {
            obj[chr] += 1;
        }else {
            obj[chr] = 1;
        }
    }
    //console.log(obj);

    let single = [];
    for (key in obj) {
        if (obj[key] == 1){
            single.push(key);
        }
    }

    return single;
}

//console.log(uniqueChar('happyyayayyaynoerin'));

//17.Write a JavaScript function to get the number of occurrences of each letter in specified string.
function count(s) {
    let obj = new Object();
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (char in obj) {
            obj[char] += 1;
        }else {
            obj[char] = 1
        }
    }
    return obj;
}

//console.log(count('fjawoeifhjawoefaw'));

//18. Write a function for searching JavaScript arrays with a binary search.

function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === val){
            return mid;
        }
        else if (val < arr[mid]){
            left = mid;
        }
        else {
            right = mid;
        }
    return left;
    }
}

//19. Write a JavaScript function that returns array elements larger than a number. 

function largerNum(arr, num) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (item > num){
            res.push(item);
        }
    }
    return res;
}

//console.log(largerNum([1,2,3,4,6], 5));


//20. Write a JavaScript function that generates a string id (specified length) of random characters

function makeid(length) {
    let res = '';
    let chars = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < length; i++) {
        res += chars.charAt(Math.floor(Math.random() * 26));
    }
    return res
}

//console.log(makeid(5));

//21.Write a JavaScript function to get all possible subset with a fixed length (for example 2)
//combinations in an array.

function getSubset(arr, len) {
    let res = [], sub = [];
    
    function getSubsetTill(idx) {
        if (sub.length === len) {   
            res.push(sub.slice());
            return;
        }
        for (let i = idx; i < arr.length; i++) {
            sub.push(arr[i]);
            getSubsetTill(i + 1);
            sub.pop();
        }
    }
    
    getSubsetTill(0);
    return res;
}



//22.  Write a JavaScript function that accepts two arguments, a string and a letter and the function
//will count the number of occurrences of the specified letter within the string.
function countLetter(s, char) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == char) {
            res += 1;
        }
    }
    return res;
}

//console.log(countLetter('get me to the moon', 'o'));

//23. Write a JavaScript function to find the first not repeated character. 

function notRepeatChar(s){
    let obj = new Object();
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char in obj) {
            obj[char] += 1
        } else {
            obj[char] = 1
        }
    }
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (obj[char] == 1) {
            return char;
        }
    }
}

//console.log(notRepeatChar('aabbbcdefj'));

//24. Write a JavaScript function to apply Bubble Sort algorithm. 

function bubbleSort(arr) { 
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

//25. Write a JavaScript function that accept a list of country names as input and returns the
//longest country name as output. 

function findLongestName(arr) {
    let max_len = 0;
    let max_country = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max_len){
            max_len = arr[i].length;
            max_country = arr[i];
        }
    }
    return max_country;
}

//26. Write a JavaScript function to find longest substring in a given a string without repeating
//characters. 


function findUnique(s) {
    let left = 0;
    let obj = new Object();
    let max_len = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        while (obj[char] > 0) {
            obj[s[left]] -= 1
            left ++;
        }
        if (i - left + 1 > max_len){
            max_len = i - left + 1
        }
        obj[char] = 1
    }
    return max_len;
}

//console.log(findUnique("abcdd"));

//27. Write a JavaScript function that returns the longest palindrome in a given string. 

function greet() {
    return 'Hello';
}

//passing function greet() as a parameter
function greeter(user, func) {

    //accessing passing function
    const message = func();

    console.log('${message} ${user}');
}

console.log(greeter('John', greet));

//28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function calculate(x, y, func) {
    return func(x, y);
}

function plus(x, y) {
    return x + y;
}

function minus(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}



//29. Write a JavaScript function to get the function name. 
let returnName = (func) => {
    return func.name;
  };
  console.log(returnName(returnName));
