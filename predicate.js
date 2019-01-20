// another example using point free
// point-ful

function output(txt){
   console.log(txt)
}

function printIf(predicate, msg){
  if(predicate(msg)){
     output(msg)
  }
}

function isShortEnough(str){
   return str.length <= 5
}

var msg1 = "Hello"
var msg2 = msg1 + "World"

printIf(isShortEnough, msg1)
printIf(isShortEnough, msg2)

// point-free 

function not(predicate){
   return function negated(...args){
      return !predicate(...args)
  }
}

var isLongEnough = not(isShortEnough)

function when(predicate, fn){
  return function conditional(...args){
	if(predicate(..args)){
	    return fn(...args)
	}
    } 
}



