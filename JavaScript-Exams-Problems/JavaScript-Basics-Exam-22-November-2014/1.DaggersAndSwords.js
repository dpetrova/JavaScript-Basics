/**
 * Created by urukhai on 4/3/15.
 */
function solve(input){

    console.log('<table border="1">');
    console.log('<thead>');
    console.log('<tr><th colspan="3">Blades</th></tr>');
    console.log('<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>');
    console.log('</thead>');
    console.log('<tbody>');

    for (var i in input) {
        var item = input[i];
        var bladeLength = Math.floor(Number(item));
        var isSword = bladeLength > 40;
        var bladeType = isSword ? 'sword' : 'dagger';
        var bladeApplication = '';
        switch (bladeLength % 5){
            case 1: bladeApplication = 'blade'; break;
            case 2: bladeApplication = 'quite a blade'; break;
            case 3: bladeApplication = 'pants-scraper'; break;
            case 4: bladeApplication = 'frog-butcher'; break;
            case 0: bladeApplication = '*rap-poker'; break;
        }
        if(bladeLength > 10){
            console.log('<tr><td>' + bladeLength + '</td><td>' + bladeType + '</td><td>' + bladeApplication + '</td></tr>');
        }
    }
    console.log('</tbody>');
    console.log('</table>');

}



solve( ['17.8',
        '19.4',
        '13',
        '55.8',
        '126.96541651',
        '3'
        ]
);