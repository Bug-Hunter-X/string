function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

for (const u of user) {
  console.log(greeter(u)); //This will fix the error by iterating through the array and calling the function with each string element
}
//Alternative solution:

function greeter2(persons: string[]): string[]{
  return persons.map(person => "Hello, " + person);
}
console.log(greeter2(user));