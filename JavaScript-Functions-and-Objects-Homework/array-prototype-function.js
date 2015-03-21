/**
 * Created by urukhai on 3/21/15.
 */
//Removes the first element found from left to right in the array
//Second argument should be truthy to remove all elements
Array.prototype.removeItem = function(value, all){
    for(var i = 0; i < this.length; i++){
        if(this[i] === value){
            this.splice(i,1);
            if(!all)
                break;
            else
                i--;
        }
    }
};

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
arr.removeItem(1,'all');
console.log(arr);

var arr = ['hi', 'bye', 'hello' ];
arr.removeItem('bye');
console.log(arr);


