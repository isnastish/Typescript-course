// NOTE: Absolutely the same as in Golang
interface Named {
  // cannot be changed after an object has been initialized
  readonly name: string;
}

interface Greetable extends Named {
  greet(greeting: string): void;
}

class Student implements Greetable {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet(greeting: string): void {
    console.log(greeting + this.name + "!");
  }
}

class Teacher implements Greetable {
  name: string;
  subject: string;

  constructor(name: string, subject: string) {
    this.name = name;
    this.subject = subject;
  }

  greet(greeting: string): void {
    if (!greeting.endsWith(" ")) {
      greeting += " ";
    }
    console.log(greeting + this.name + " I teach " + this.subject);
  }
}

let student: Greetable;
student = new Student("Alexey");
student.greet("Greetings to ");

// Implements the same interface, so it's totally fine to reassign
student = new Teacher("Magnus", "physics");
student.greet("Greetings to");

///////////////////////////////////////////////////////////////
interface Backend {
  participants: string[];

  storeMessage(message: string): void;
  addParticipant(name: string): void;
  hasParticipant(name: string): boolean;
  removeParticipan(name: string): boolean;
}

class FirstBackend implements Backend {
  participants: string[] = [];

  storeMessage(message: string): void {}

  addParticipant(name: string): void {
    if (name in this.participants) {
      throw new Error(`Participant ${name} already exists`);
    }
  }

  hasParticipant(name: string): boolean {
    return true;
  }

  removeParticipan(name: string): boolean {
    return true;
  }
}
