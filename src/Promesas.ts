setTimeout(imprimir, 5000)

function imprimir() {
    console.log("Hola")
}

fetch("/users").then(
    (resp) => {
        console.log(resp.body)
    }
).catch(
    (error) => console.error(error)
)
