const suma: (a: number, b: number) => number = (num: number, num1: number)  => {
    return num + num1
}

console.log(suma(2, 3))


const concatValues = (a: string, b?:string) => {
    if (b){
        return a + b
    }
    return a
}

const concatWithDefault = (a: string, b: string = "default") => {
    return a + b
}

console.log(concatValues("hola ", "mundo"))
console.log(concatWithDefault("hola "))
