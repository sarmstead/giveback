// Stark Intelligence is building a new feature for Tortuga. 
// The AI will listen for a phrase and say it back in reverse.

// Expected input: I love apples
// Expected output: apples love I

const input = 'I love apples'

const backwords = (phrase) => {
  const phraseArray = phrase.split(' ')
  const reversedPhraseArray = phraseArray.reverse()
  let backwords = reversedPhraseArray.join(' ')
  return backwords
}

console.log(backwords(input))