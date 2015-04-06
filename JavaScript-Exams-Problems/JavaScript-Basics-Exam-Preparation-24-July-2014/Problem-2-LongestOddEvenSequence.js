function solve(input) {
    //we get the input and split to array of numbers
    var nums = input[0].split(/[ ()]+/);
    nums = nums.filter(function(v){return v!==''}).map(Number); //махаме празните стрингове и парсваме към числа
//  console.log(nums.join(' '));

    //find the longest alternating sequence
    var maxLength = 0;
    var currLength = 0;
    var shouldBeOdd = nums[0] % 2 !== 0; //if true number is odd (ако работим със стрингове, в момента в който му приложим % то го разпознава като число)
    for (var i = 0; i < nums.length; i++) {
        var isOdd = nums[i] % 2 !== 0; //if true number is odd
        if(isOdd == shouldBeOdd || nums[i] == 0) { //първия път сравнява себе си със себе си (и двата индекса са 0), това ще е true и текущата дължина ще стане 1 (1 елемент); след това обръща четността на shouldBeOdd и продължава проверката
            currLength++;
            if (currLength > maxLength) {
                maxLength = currLength;
            }
        } else {
            shouldBeOdd = isOdd;
            currLength = 1;
        }
        shouldBeOdd = !shouldBeOdd; //обръща проверката да е за четно число

    }
    console.log(maxLength);
}

//when you submit the code into the Judge system, do not copy the code below!
solve(['(3) (22) (-18) (55) (44) (3) (21)']);
