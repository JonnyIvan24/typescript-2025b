
function print<T, I>(a: T, b: I) {
    console.log(typeof a)
    console.log(a)
}

print<number, string>(1, "")
print<number, number>(1, 2)
print<string, number>("", 2)

interface PrintId {
    id: number;
    print: () => void;
}

interface PrintName {
    name: string;
    print: () => void;
}

interface Print extends PrintId, PrintName {
    description: string;
}


function printUseT<T extends PrintId | PrintName> (item: T) {
    item.print();
    item.id
    item.name
}

printUseT({print: () =>  console.log("Hola"), name: "hola", id: 1, description: "hola"})
