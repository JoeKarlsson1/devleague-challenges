const submitPigPhrase = () => {
  let input = document.getElementById('pigInput').value;
  let translation = document.getElementById('translation');

  let header = document.createElement('h3');
  let text = document.createElement('p');

  //clear previous translation from the DOM
  translation.removeChild(translation.firstChild)

  //Append newly translated phrase to the DOM
  text.innerHTML = pigPhrase(input);
  translation.appendChild(text);
};

/**
 * Takes an sentence and converts each word into pig latin
 * @param  [String] phrase that will be converted into pig latin.
 * @return [String] Phrase that has been translated into pig latin
 */
const pigPhrase = (phrase) => {
  if(phrase === ''){
    throw new Error('Please enter a valid string')
  }
  if(typeof phrase !== 'string'){
    throw new Error('Please enter a valid string')
  }
  let sentence = phrase.split(' ');
  let piggedPhrase = [];

  for (let i = 0; i < sentence.length; i++) {
    piggedPhrase.push(pigWord(sentence[i]));
  };
  return piggedPhrase.join(' ');
};

/**
 * converts a pig latin phrase back into it's native language
 * @param  [String] Pig Latin phrase that will be converted back into the native language.
 * @return [String] Phrase that has been translated into the native language.
 */
const unpigPhrase = (phrase) => {
  if(phrase === ''){
    throw new Error('Please enter a valid string')
  }
  if(typeof phrase !== 'string'){
    throw new Error('Please enter a valid string')
  }
  let sentence = phrase.split(' ');
  let unpiggedPhrase = [];

  for (let i = 0; i <= sentence.length - 1; i++) {
    unpiggedPhrase.push(unpigWord(sentence[i]));
  };
  return unpiggedPhrase.join(' ');
};

/**
 * Takes a word and converts it into pig latin
 * @param  [string] This is the word that will be converted
 * @return [string] Word that hass been converted into pig latin
 */
const pigWord = (word) => {
  return word.slice(findFirstVowel(word), word.length)
    + '-'
    + word.slice( -word.length, findFirstVowel(word))
    + 'ay';
};

/**
 * Takes a word in pig latin and converts it into a human readable word
 * @param  [String] piggedWord that will be translated
 * @return [String] Translated word
 */
const unpigWord = ( piggedWord ) => {
  return piggedWord.slice( piggedWord.search('-') + 1, -2 )
    + piggedWord.slice( 0, piggedWord.search('-'));
};

/**
 * Finds the first vowel in a word
 * @param  [sting] word
 * @return [int] position of the first vowel in the word
 */

const findFirstVowel = (word) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < word.length; i++) {
    if (vowels.indexOf(word[i]) !== -1 ) {
      console.log(i)
      return i;
    }
  }
  return word.length;
};

findFirstVowel('glove');

module.exports = {
  pigPhrase,
  unpigPhrase
};
