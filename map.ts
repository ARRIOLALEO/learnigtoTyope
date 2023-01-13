function myMap<T,U>(input:T[],fun:(arg:T)=>U):U[]{
    return input.map(fun)
}

const myArrya = [1,2,3,4,5,6]

console.log(myMap(myArrya,(i)=> i+1))
