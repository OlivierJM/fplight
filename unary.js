// unary function
function unary(fn){
	return function onlyOneArg(arg){
		return fn(arg)
}

}
// this one doesn't work because of the index that gets passed as the second args
console.log(["1","2","3" ].map(parseInt))

// the unary removes other arguments and maintains the first one only
console.log(["1", "2", "3"].map(unary(parseInt)))
