// Hackerrank day 8 of 30 days of code.  Working on Key-Value pair mappings.

function processData(input) {
    // store number of phone book entries
    var numLinesArr = input.split('\n');
    var numLines = numLinesArr[0];
    // next 2 lines get the data in string
    var lines = input.slice(numLines.length + 1);
    var lineData = lines.replace(/[\n]/g, ' ');
    // create array of entries
    var pbData = lineData.split(' ');
    // create phonebook object
    var phoneBook = new Map();
    for (var i = 0; i < (numLines * 2); i+=2) {
        phoneBook.set(pbData[i], pbData[i+1]);
    }
    // lookup entries and print result
    for (var i = (numLines * 2); i <= pbData.length - 1; i++) {
        
        if (phoneBook.get(pbData[i]) === undefined) { 
            console.log('Not found');
        } else {
            console.log(pbData[i]+'='+phoneBook.get(pbData[i]));
        }    
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
       