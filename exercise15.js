function groupAnimals(animals) {
    animals.sort();
    var result = [];

    for(i = 0; i < animals.length; i++){
        var temp = [animals[i]];
        for(j = i+1; j < animals.length; j++){
            if(animals[i][0] == animals[j][0]){
                temp.push(animals[j]);
                i++;
            }
        }
        result.push(temp);
    }
    return result;
}
  
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]