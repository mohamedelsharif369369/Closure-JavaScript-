let globalVar = "global";

function testScope() {
  let localVar = "local";

  console.log(globalVar); // يشتغل
  console.log(localVar);  // يشتغل
}

testScope();

console.log(localVar);
