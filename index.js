function receivesAFunction(aFunction){
return aFunction()
}

function returnsANamedFunction(){
  return receivesAFunction
}
function returnsAnAnonymousFunction(){
  return (function () {
    console.log("Stretch! Work that core!");})
}