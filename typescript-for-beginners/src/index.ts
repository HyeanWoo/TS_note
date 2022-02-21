interface Human {
  name:string;
  eye:number;
  nose:string;
}

const person = {
  name: "atom",
  eye: 33,
  nose: "false"
}

const sayHi = (person:Human):string => {
  return `Hello ${person.name}! You have ${person.eye} eyes, and ${person.nose} nose`;
}

console.log(sayHi(person));

export {};