function targetTerdekat(arr) {
    var result = [];

    for(i = 0; i < arr.length; i++){
        var jarak = undefined;
        if(arr[i] == 'o'){
            for(j = i + 1; j < arr.length; j++){
                if(arr[j] == 'x'){
                    jarak = j - i;
                    break;
                }
            }
        }
        else if(arr[i] == 'x'){
            for(j = i + 1; j < arr.length; j++){
                if(arr[j] == 'o'){
                    jarak = j - i;
                    break;
                }
            }
        }
        if(jarak !== undefined){
            result.push(jarak);
        }
        
    }   
    if(result.length == 0){
        return 0;
    }
    return Math.min(...result);
}
  
  // TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2