function shuffleCards(topHalf, bottomHalf, results = []) {
//takes two arrays, must return one array once theres nothing left to push
    if(topHalf.length === 0 && bottomHalf.length === 0){
        return results 
    }
    if(topHalf.length !== 0){
        results.push(topHalf[0])
    }
    if(bottomHalf.length !== 0){
        results.push(bottomHalf[0])
    } 


    return shuffleCards(topHalf.slice(1), bottomHalf.slice(1), results)
}



// UNCOMMENT TO TEST YOUR WORK
const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
console.log(shuffleCards(topHalf, bottomHalf));
  /*-> ['Queen of Diamonds',
        'Jack of Hearts',
        'Five of Hearts',
        'Ten of Spades',
        'Ace of Spades',
        'Eight of Clubs',
      ]
  */