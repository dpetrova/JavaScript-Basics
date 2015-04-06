/**
 * Created by urukhai on 3/26/15.
 */
//структурата на данните ще е следната:
// {file-extension: {files:[name1, name2,...], memory: total-memory}}
function solve(input){
    var currLine,
        name,
        ext,
        memory,
        obj = {},
        sortedKeys,
        outputObj = {};

    for (var i in input) {
        currLine = input[i].split(' ');
        name = currLine[0];
        ext = currLine[1];
        memory = Number(currLine[2].substring(0, currLine[2].length - 2));

        //fill obj with data
        //1 вариант:
        //if(!obj[ext]){
        //    obj[ext] = {files: [], memory: 0};
        //    obj[ext].files.push(name);
        //}
        //obj[ext].memory += memory;
        //if(obj[ext].files.indexOf(name) == -1){
        //    obj[ext].files.push(name);
        //}

        //2 вариант:
        if(!obj[ext]){
            obj[ext] = {files: [], memory: 0};
            obj[ext].files.push(name);
            obj[ext].memory += memory;
            continue;
        }
        if(obj[ext].files.indexOf(name) == -1){
            obj[ext].files.push(name);
            obj[ext].memory += memory;
        } else {
            obj[ext].memory += memory;
        }
    }

    //fixed memory value to 2 digits after decimal point
    for (var m in obj) {
        obj[m].memory = obj[m].memory.toFixed(2);
    }

    //sort extensions
    sortedKeys = Object.keys(obj).sort();
    for (var j in sortedKeys) {
        outputObj[sortedKeys[j]] = obj[sortedKeys[j]];
    }

    //sort file names
    for (var k in outputObj) {
        outputObj[k].files.sort();
    }

    console.log(JSON.stringify(outputObj));
}

solve( ['sentinel .exe 15MB',
        'zoomIt .msi 3MB',
        'skype .exe 45MB',
        'trojanStopper .bat 23MB',
        'kindleInstaller .exe 120MB',
        'setup .msi 33.4MB',
        'winBlock .bat 1MB'
    ]
);

console.log();

solve( ['eclipse .tar.gz 198.00MB',
        'uTorrent .gyp 33.02MB',
        'nodeJS .gyp 14MB',
        'nakov-naked .jpeg 3MB',
        'gnuGPL .pdf 5.6MB',
        'skype .tar.gz 66MB',
        'selfie .jpeg 7.24MB',
        'myFiles .tar.gz 783MB'
        ]
);
