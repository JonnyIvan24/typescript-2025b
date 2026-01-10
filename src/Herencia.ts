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
    print(text: string, num: number) {
        console.log('Imprimiendo desde BaseClass ' + text)
    }
}

class MyClass extends BaseClass {
    name: string
    constructor(id:number, name: string) {
        super(id)
        this.name = name
    }

    print(text: string): void {
        console.log('imprimiendo desde MyClass ' + text)
        super.print(text, 1)
    }
}

const myClass: MyClass = new MyClass(1, 'Ana')


console.log(myClass.id)
console.log(myClass.name)
myClass.print('Hola')
