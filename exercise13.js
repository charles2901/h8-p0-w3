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

    for(i = 0; i < result.length; i++){
        for(j = 0; j < result.length; j++){
            if(result[j] > result[j+1]){
                var temp = result[j];
                result[j] = result[j+1];
                result[j+1] = temp;
            }
        }
    }
    return result[0];

    // cara return value lain dengan built-in 
    // return Math.min(...result);
}
  
  // TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2