//Is Palindrome (leetcode);

var isPalindrome = function(x) 
   {
    let str = x.toString();
   let a = str.split("").reverse("").join("");
   return str === a;
};

let x = 121;
console.log(isPalindrome(x));

