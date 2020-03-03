function dataHandling2(arr){
    var newName = arr[1] + ' Elsharawy'
    var newAddress = 'Provinsi ' + arr[2];
    var birthDate = arr[3];
    var gender = "Pria";
    var shsName = "SMA Internasional Metro";

    var formatDate = birthDate.split('/');

    //checking valid birthdate
    if(formatDate[1] == '01' || formatDate[1] == '03' || formatDate[1] == '05' || formatDate[1] == '07' || formatDate[1] == '08' || formatDate[1] == '10' || formatDate[1] == '12'){
        if(parseInt(formatDate[0]) > 31 || parseInt(formatDate[0]) < 1){
            console.log("Birthdate input incorrect")
            return "Birthdate input incorrect"
        }
        
    }
    else if(formatDate[1] == '04' || formatDate[1] == '06' || formatDate[1] == '09' || formatDate[1] == '11'){
        if(parseInt(formatDate[0]) > 30 || parseInt(formatDate[0]) < 1){
            console.log("Birthdate input incorrect")
            return "Birthdate input incorrect"
        }
    }
    else if(formatDate[1] == '02'){ 
        // handle kabisat
        if(parseInt(formatDate[2]) % 4 == 0 && parseInt(formatDate[2]) % 100 != 0 ){
            if(parseInt(formatDate[0]) > 29 || parseInt(formatDate[0]) < 1){
                console.log("Birthdate input incorrect")
                return "Birthdate input incorrect"
            }        
        }
        else if(parseInt(formatDate[2]) % 4 == 0 && parseInt(formatDate[2]) % 100 == 0 && parseInt(formatDate[2]) % 400 == 0){
            if(parseInt(formatDate[0]) > 29 || parseInt(formatDate[0]) < 1){
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
    

    arr.splice(1, 4, newName, newAddress, birthDate, gender, shsName);
    console.log(arr);

    switch(formatDate[1]){
        case '01':
            console.log('Januari');
            break;
        case '02':
            console.log('Februari');
            break;
        case '03':
            console.log('Maret');
            break;
        case '04':
            console.log('April');
            break;
        case '05':
            console.log('Mei');
            break;
        case '06':
            console.log('Juni');
            break;
        case '07':
            console.log('Juli');
            break;
        case '08':
            console.log('Agustus');
            break;
        case '09':
            console.log('September');
            break;
        case '10':
            console.log('Oktober');
            break;
        case '11':
            console.log(' November');
            break;
        case '12':
            console.log('Desember');
            break;            
    }
    console.log(formatDate.sort(function(a,b){return b - a}));
    console.log(arr[3].split('/').join('-'))
    console.log(arr[1].slice(0,14))
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

/*
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */