export class PersonModel{
  constructor(id,firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

export class DOM{
  constructor(people){
    this.people = people;
  }
}