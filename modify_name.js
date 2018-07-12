let names = ["Budi", "Joni", "Tono", "Jaka"];

const addMister = name => `Mr. ${name}`;
const addExclamation = name => `${name}!`;
const addQuestion = name => `${name}?`;

let modifiedNames = names
    .map(addMister)
    .map(addExclamation)
    .map(addQuestion)

console.log(modifiedNames);