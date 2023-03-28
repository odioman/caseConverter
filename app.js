const snakeCase = ['snake_case', 'another_example', 'can_be_many_words'];
/**
  * convert an array of snake_case strings to an array of PascalCase strings
  * @param {array} snakeCase
  * @returns an array of PascalCase strings  
  */
function pascalCaseConverter(snakeCase) {
  const finalArr = [];
  for (let i = 0; i < snakeCase.length; i++) {
    const arr = [];
    let wordSplit = snakeCase[i].split('_')
    console.log(wordSplit)
   
    for (let j = 0; j < wordSplit.length; j++) {
      console.log("wordSplit[j]:", wordSplit[j]);
      const firstLetterCap = wordSplit[j][0].toUpperCase();
      console.log(firstLetterCap)
      const wordSlice = wordSplit[j].slice(1);
      console.log("wordSlice:", wordSlice)
      const joinWord = firstLetterCap + wordSlice;
      console.log("joinWord:", joinWord)
      arr.push(joinWord)
    }
    const pascalCase = arr.join(''); 
    console.log("pascalCase: ", pascalCase)
    finalArr.push(pascalCase)
  }
  console.log("finalArr:", finalArr);
  return finalArr
}
pascalCaseConverter(snakeCase)

const snakeCase = ['snake_case', 'another_example', 'can_be_many_words'];

function camelCaseConverter(snakeCase) {
  let finalArr = [];
  for (let i = 0; i < snakeCase.length; i++) {
    const arr = [];
    const wordSplit = snakeCase[i].split("_");
    console.log("wordSplit: ", wordSplit);
    for (let j = 1; j < wordSplit.length; j++) {
      const secondWordCap = wordSplit[j][0].toUpperCase();
      console.log(secondWordCap);
      const restOfSecondWord = wordSplit[j].slice(1);
      const joinSecondWord = secondWordCap + restOfSecondWord
      console.log("joinSecondWord: ", joinSecondWord)
      arr.push(joinSecondWord);
    }
      arr.unshift(wordSplit[0])
      console.log("arr: ", arr); 
      finalArr = arr.join(''); 
      console.log("finalArr: ", finalArr)
  }  
  return finalArr
}

camelCaseConverter(snakeCase)

const objKeyValue = { key1: 'value-1', key2: 'value-two'}

function kebabCaseToSnakeCaseConverter(objKeyValue){
  let finalArr = [];
 
  for (let values of Object.values(objKeyValue)) {
    let arr = [];
    arr.push(values);
    for (let i=0; i<arr.length; i++) {
      let wordSplit = arr[i].split('-');
      console.log(wordSplit)
      let wordJoin = wordSplit.join('_');
      console.log("wordJoin:" , wordJoin);
      finalArr.push(wordJoin);
    }
    console.log("finalArr: ", finalArr)
    objKeyValue['key1'] = finalArr[0];
    objKeyValue['key2'] = finalArr[1]
    console.log(objKeyValue);
  }
  console.log("objKeyValue: ", objKeyValue)
  return objKeyValue;
}