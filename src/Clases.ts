interface Print {
    print: () => void;
}

class Persona implements Print {
    id: number;

    constructor(id: number) {
        this.id = id
    }

    print(): void {
        console.log("imprimiendo...." + this.id)
    }
}

class Gerente implements Print {
    print(): void {
        console.log("Gerente esta imprimiendo....")
    }
}

const persona = new Persona(10)
persona.print()

function imprimir(obj: Print) {
    obj.print()
}

const gerente = new Gerente()

imprimir(persona)
imprimir(gerente)
