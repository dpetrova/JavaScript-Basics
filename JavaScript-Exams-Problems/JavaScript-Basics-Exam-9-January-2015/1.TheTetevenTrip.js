/**
 * Created by urukhai on 3/31/15.
 */
function solve(input){
    var fuelBaseConsumption,
        gasCorrCoeff = 1.2,
        petrolCorrCoeff  = 1,
        dieselCorrCoeff = 0.8,
        extraFuelConsumption,
        extraSnowConsumption,
        totalFuelConsumption,
        outputStr = '';

    for (var i = 0; i < input.length; i++) {
        var line = input[i].split(' ');
        var carModel = line[0];
        var fuelType = line[1];
        var route = Number(line[2]);
        var luggageWeight = Number(line[3]);
        extraFuelConsumption = luggageWeight * 0.01;
        fuelBaseConsumption = calcBaseFuelConsumption(fuelType);
        fuelBaseConsumption += extraFuelConsumption;
        totalFuelConsumption = calcTotalFuelConsumption(route);
        outputStr = carModel + ' ' + fuelType + ' ' + route + ' ' + totalFuelConsumption;
        console.log(outputStr);
    }


    function calcBaseFuelConsumption(fuelType) {
        switch (fuelType) {
            case 'petrol':
                fuelBaseConsumption = 10 * petrolCorrCoeff;
                break;
            case 'gas':
                fuelBaseConsumption = 10 * gasCorrCoeff;
                break;
            case 'diesel':
                fuelBaseConsumption = 10 * dieselCorrCoeff;
                break;
        }
        return fuelBaseConsumption;
    }


        function calcTotalFuelConsumption(route) {
            switch (route) {
                case 1:
                    totalFuelConsumption = 110 * (fuelBaseConsumption / 100);
                    extraSnowConsumption = 0.3 * fuelBaseConsumption;
                    totalFuelConsumption += 10 * (extraSnowConsumption / 100);
                    totalFuelConsumption = Math.round(totalFuelConsumption);
                    break;
                case 2:
                    totalFuelConsumption = 95 * (fuelBaseConsumption / 100);
                    extraSnowConsumption = 0.3 * fuelBaseConsumption;
                    totalFuelConsumption += 30 * (extraSnowConsumption / 100);
                    totalFuelConsumption = Math.round(totalFuelConsumption);
                    break;
            }
            return totalFuelConsumption;
        }



}

solve(['BMW petrol 1 320.5',
        'Golf petrol 2 150.75',
        'Lada gas 1 202',
        'Mercedes diesel 2 312.54']
);