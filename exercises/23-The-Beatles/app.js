
function sing(){
    let letItBe = 'let it be'
    let whisper = 'whisper words of wisdom'
    let answer = 'there will be an answer'
    let array = [];
    for(let i = 0; i<4; i++){
        array.push(letItBe)
    }
    array.push(whisper);

    for(let i = 0; i<5; i++){
        array.push(letItBe)
    }
        array.push(answer)
        array.push(letItBe)
        return array.join(', ')
}

console.log(sing());