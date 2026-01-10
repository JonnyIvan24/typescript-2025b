interface Id { 
    id: number | string;
}

interface Age {
    age: number
}

interface IdName extends Id, Age {
    id:  number;
    name: string;
}

class Persona implements IdName {
    age: number = 25;
    name = '';
    id = 1;
}

class BaseClass {
    id: number;
    constructor(id: number) {
        this.id = id
    }
}

class MyClass extends BaseClass {
    name: string
    constructor(id:number, name: string) {
        super(id)
        this.name = name
    }
}

const myClass: MyClass = new MyClass(1, 'Ana')


console.log(myClass.id)
console.log(myClass.name)