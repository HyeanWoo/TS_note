class Human {
  public name:string;
  public age:number;
  public gender:string;

  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human('lynn', 18, 'female');

const sayHi = (person:Human):string => {
  return `Hello ${person.name}! You are ${person.age} olds, and you are ${person.gender}`;
}

console.log(sayHi(lynn));

export {};