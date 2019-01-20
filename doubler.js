// map
// avoid the console.log as it is not an fp standar

function double(x){
   return x * 2
}

[1,2,3,4,5,6].map(function mapper(v){
    console.log(double(v))
})

// with no point or no parameter input

console.log([1, 2, 3, 4, 5, 6].map(double))

