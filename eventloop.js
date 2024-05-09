console.log("1"); //1

setTimeout(() => {
  console.log("7"); //7
}, 1);

async function dataFetch() {
  console.log("9");
  console.log("98");
  console.log("988");
  console.log("9887");
  console.log("98876");
  console.log("988765");
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("3"); //3
  console.log("4"); //4
  const data = await response.json();
  console.log("5", data); //5
  console.log("6"); //6
}

console.log("2"); // 2
dataFetch();
console.log("33");
