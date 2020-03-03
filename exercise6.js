function angkaPalindrome(num){
    if(num == undefined){
        return "Input tidak valid"
    }
    var str = num.toString();
    var balikStr = '';
    for(i = str.length-1; i >=0; i--){
        balikStr += str[i];
    }
    if(balikStr == str){
        console.log(`Input ${num} merupakan angka palindrome`)
    }

    var isPalindrome = false;
    while(isPalindrome == false){
        num++;
        var newStr = num.toString();
        var balikNum = '';
        for(i = newStr.length - 1; i >= 0; i--){
            balikNum += newStr[i];
        }
        if(balikNum == num.toString()){
            isPalindrome = true;
        }    
    }
    return `Angka palindrome selanjutnya adalah ${num}`;
}


// with built-in function

// function angkaPalindrome(num) {
//     var result;
//     for(i = num+1;; i++){
//         if(i == i.toString().split('').reverse().join('')){
//             result = i;
//             break;
//         }
//     }
//     return result;
// }
  
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001