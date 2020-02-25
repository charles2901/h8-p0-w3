function palindrome(kata) {
    var balikKata = kata.split('').reverse().join('');
    if(balikKata == kata){
        return true;
    }
    return false;


}
  
  // TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false