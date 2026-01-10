
function print<T, I>(a: T, b: I) {
    console.log(typeof a)
    console.log(a)
}

print<number, string>(1, "")
print<number, number>(1, 2)
print<string, number>("", 2)
