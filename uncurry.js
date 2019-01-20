// the uncurry function

function uncarry(fn){
   return function uncurried(...args){
      var ret = fn
      
      for(let arg of args){
	    ret = ret(arg)
	}	
	return ret
   }
}

// example using uncurry

function sum(...nums){
   var sum = 0
   
   for (let num of nums){
      sum += num
    }
   return sum
}
// try and apply the curried method on the sum function on top 


