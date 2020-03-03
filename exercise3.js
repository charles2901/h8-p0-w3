function dataHandling(arr){
    for(i = 0; i < arr.length; i++){

        //checking invalid input
        var formatDate = '';
        var formatMonth = '';
        var formatYear = '';

        for(j = 0; j < arr[i][3].length; j++){
            if(arr[i][3][j] != '/'){
                formatDate += arr[i][3][j];
            }
            else if(arr[i][3][j] == '/'){
                for(k = j+1; k < arr[i][3].length; k++){
                    if(arr[i][3][k] != '/'){
                        formatMonth += arr[i][3][k];;
                    }
                    else if(arr[i][3][k] == '/'){
                        for(l = k+1; l < arr[i][3].length; l++){
                            formatYear += arr[i][3][l]
                        }
                        break;
                    }
                }
                break;
            }
        }
        if(parseInt(formatMonth) == 1 || parseInt(formatMonth) == 3 || parseInt(formatMonth) == 5 || parseInt(formatMonth) == 7 || parseInt(formatMonth) == 8 || parseInt(formatMonth) == 10 || parseInt(formatMonth) == 12){
            if(parseInt(formatDate) > 31 || parseInt(formatDate) < 1){
                console.log("Birthdate input incorrect")
                return "Birthdate input incorrect"
            }
            
        }
        else if(parseInt(formatMonth) == 4 || parseInt(formatMonth) == 6 || parseInt(formatMonth) == 9 || parseInt(formatMonth) == 11){
            if(parseInt(formatDate) > 30 || parseInt(formatDate) < 1){
                console.log("Birthdate input incorrect")
                return "Birthdate input incorrect"
            }
        }
        else if(parseInt(formatMonth) == 2){ 
            // handle kabisat
            if(parseInt(formatYear) % 4 == 0 && parseInt(formatYear) % 100 != 0 ){
                if(parseInt(formatDate) > 29 || parseInt(formatDate) < 1){
                    console.log("Birthdate input incorrect")
                    return "Birthdate input incorrect"
                }        
            }
            else if(parseInt(formatYear) % 4 == 0 && parseInt(formatYear) % 100 == 0 && parseInt(formatYear) % 400 == 0){
                if(parseInt(formatDate) > 29 || parseInt(formatDate) < 1){
                    console.log("Birthdate input incorrect")
                    return "Birthdate input incorrect"
                }
            }
            else if(parseInt(formatDate[0]) > 28 || parseInt(formatDate[0]) < 1){
                console.log("Birthdate input incorrect")
                return "Birthdate input incorrect"
            }
        }
        else{
            console.log("Birthdate input incorrect")
            return "Birthdate input incorrect"
        }
        var nomorID = arr[i][0];
        var nama = arr[i][1];
        var ttl = arr[i][2] +' '+ arr[i][3];
        var hobi = arr[i][4] ;
        
        if(nomorID != '' && nama != ''){
            console.log('Nomor ID: ' + nomorID);
            console.log('Nama : ' + nama);
            console.log('TTL : ' + ttl);
            console.log('Hobi : ' + hobi);
            console.log(' ');
        }
        else if(nomorID == ''){
            console.log("Nomor ID kosong");
            console.log(' ');
        }
        else if(nama == ''){
            console.log("Nama kosong");
            console.log(' ');
        }
    }
}



var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

dataHandling(input);