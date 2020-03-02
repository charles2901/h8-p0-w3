function hitungJumlahKata(kalimat){
  var jumlahKata = 1;
  for(i = 0; i < kalimat.length; i++){
    if(kalimat[i] == ' '){
      jumlahKata++;
    }
  }
  return jumlahKata
}


//with built in function

// function hitungJumlahKata(kalimat) {
//     var pisahKalimat = kalimat.split(' ');
//     return pisahKalimat.length;
// }
  
  // TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5