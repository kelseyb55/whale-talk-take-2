var input = 'turpentine and turtles'

const vowels = ['a', 'e', 'i', 'o', 'u'];

var resultArray = [];



for (let i = 0; i < input.length; i++) {
    const letter = input[i];

    if (letter === 'e' || letter === 'u'){
        resultArray.push(letter);
    }
        

    for (let j = 0; j < vowels.length; j++) {
        const vowel = vowels [j];

        if (letter === vowel){
            resultArray.push(letter);
        }

        
    }

    }

    var resultsString = resultArray.join('').toUpperCase();
        
    console.log(resultsString);
    
