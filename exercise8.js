function pasanganTerbesar(num) {
    var str = num.toString();
    var result = [];
    for(i = 0; i < str.length-1; i++){
        result.push(str[i]+str[i+1]);
    }
    var sortResult = result.sort();
    return sortResult.pop();
}
  
  // TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99