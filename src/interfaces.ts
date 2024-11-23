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
    this.participants.push(name);
  }

  hasParticipant(name: string): boolean {
    if (name in this.participants) {
      return true;
    }
    return false;
  }

  removeParticipan(name: string): boolean {
    const index = this.participants.indexOf(name);
    if (index > -1) {
      this.participants.splice(index, 1);
      return true;
    }
    return false; // element is not present
  }
}

const participantName = "Alexey";

let backend: Backend;
backend = new FirstBackend();

backend.addParticipant(participantName);
if (backend.hasParticipant(participantName)) {
  console.log(`Participant ${participantName} exists!`);
}

backend.removeParticipan(participantName);
if (backend.hasParticipant(participantName)) {
  console.log(`Participant ${participantName} exists!`);
} else {
  console.log(`Participant doesn't exist!`);
}
