function getNewArray(stringArr){
const filteredArray1 = stringArr.filter(element=>element.length>=5);
const filteredArray2 = filteredArray1.filter(element=>element.includes("a"));
return filteredArray2;
}

const stringArray = ['Pawan','Function','Nepal','Everest','Mahrishi','Computer','Script','JavaScript'];
const result = getNewArray(stringArray);
console.log(result);