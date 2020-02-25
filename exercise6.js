function angkaPalindrome(num) {
    var result;
    for(i = num+1;; i++){
        if(i == i.toString().split('').reverse().join('')){
            result = i;
            break;
        }
    }
    return result;
}
  
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001