# Stark Intelligence is building a new feature for Tortuga. 
# The AI will listen for a phrase and say it back in reverse.

# Expected input: I love apples
# Expected output: apples love I

input = 'I love apples'

def backwords(phrase)
  phraseArray = phrase.split(' ')
  reversedPhraseArray = phraseArray.reverse
  reversedPhraseArray.join(' ')
end

p backwords(input)