// Stark Intelligence is building a new feature for Tortuga. 
// The AI will listen for a phrase and say it back in reverse.

// Expected input: I love apples
// Expected output: apples love I

const siInput = 'I love apples'

const siBackwords = (phrase) => {
  const phraseArray = phrase.split(' ')
  const reversedPhraseArray = phraseArray.reverse()
  let backwords = reversedPhraseArray.join(' ')
  return backwords
}

console.log(siBackwords(siInput))

// StreamBean wants to create a simplified way for users to add their favorite streaming services.
// Create a function that takes in a new provider and adds it to an existing list for a user.
// The function should not add duplicate providers.

// Existing list: ['Disney+', 'Hulu']
// Expected input: 'Good Evening California'
// Expected output: ['Disney+', 'Hulu', 'Good Evening California']

let sbList = ['Disney+', 'Hulu']

let sbInput = 'Good Evening California'

let sbDuplicateInput = 'Disney+'

const sbAddService = (service) => {
  const isDuplicate = sbList.map(provider => {
    if (service.toLowerCase() === provider.toLowerCase()) {
      return 'yes'
    } else {
      return 'no'
    }
  })
  
  !isDuplicate.includes('yes') && sbList.push(service)
}

sbAddService(sbInput)
sbAddService(sbDuplicateInput)

console.log(sbList)