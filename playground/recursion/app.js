function cascade(number, counterDown = Math.ceil(Math.log10(number + 1)), counterUp = Math.ceil(Math.log10(number + 1)) - 1,  divide = 1 ) { //counter = 6
    
    if (counterDown !== 0){
        console.log(Math.floor(number / divide))
        divide = divide * 10
        counterDown --
    }
    if(counterDown === 0 && counterUp === Math.ceil(Math.log10(number + 1)) - 1){
        divide = divide / 10
    }
    if(counterDown === 0 && counterUp !== 0){
        divide = divide / 10
        console.log(Math.floor(number / divide))
        counterUp --      
    }
    if(counterDown === 0 && counterUp === 0){
        return 
    }
    
    
	return cascade(number, counterDown, counterUp, divide )
}


// // Uncomment to test your work!
cascade(111)
// should print
/*
111  
11
1
11
111
*/