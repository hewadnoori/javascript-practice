function hobbyTracker(hobbies) {
//create cache obj with each hobby as a key. 
    //return function with argument: string(hobby), integer(hours practiced), 
        //update cache adding value of integer to the key hobby and return updated cache
        //if return function is invoked with no args, reset all values in cache obj to zero and return string "tracker has been reset"
    let cache = hobbies.reduce((accumulator, value) => {
        return {...accumulator, [value]: 0};
    }, {});
    return function(hobby, hourPracticed){
        
        if(hobby === undefined && hourPracticed === undefined){
            cache = hobbies.reduce((accumulator, value) => {
                return {...accumulator, [value]: 0};
            }, {});
           console.log(cache)
            return 'tracker has been reset!'
        }
        else{
            cache[hobby] = hourPracticed + cache[hobby]
            return cache
        }
    }
}




// Uncomment the code below to check your code:
const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}