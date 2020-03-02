function pasanganTerbesar(num){
  var str = num.toString();
  var tempArr = [];
  
  for(i = 0; i < str.length-1; i++){
    tempArr.push(parseInt(str[i] + str[i+1]));
  }

  for(i = 0; i < tempArr.length; i++){
    for(j = 0; j < tempArr.length; j++){
      if(tempArr[j] < tempArr[j+1]){
        var temp = tempArr[j];
        tempArr[j] = tempArr[j+1];
        tempArr[j+1] = temp;
      }
    }
  }
  return tempArr[0];
}

//with built-in function

// function pasanganTerbesar(num) {
//     var str = num.toString();
//     var result = [];
//     for(i = 0; i < str.length-1; i++){
//         result.push(str[i]+str[i+1]);
//     }
//     var sortResult = result.sort();
//     return sortResult.pop();
// }
  
  // TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99