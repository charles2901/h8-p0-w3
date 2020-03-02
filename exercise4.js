function dataHandling2(arr){
    var newName = arr[1] + ' Elsharawy'
    var newAddress = 'Provinsi ' + arr[2];
    var birthDate = arr[3];
    var gender = "Pria";
    var shsName = "SMA Internasional Metro";
    arr.splice(1, 4, newName, newAddress, birthDate, gender, shsName);
    console.log(arr);

    var formatDate = birthDate.split('/');
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
        default:
            console.log("Birthdate input incorrect");
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