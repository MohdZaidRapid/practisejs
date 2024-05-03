async function dataFetch() {
  console.log("before");
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log("After");
  console.log(data);
  console.log("After 2");
  // .then((response) => {
  //   response.json();
  // })
  // .then((json) => {
  //   //   console.log("hell world Before");
  //   console.log(json);
  //   //   console.log("hell world 1");
  //   //   console.log("hell world 1");
  //   //   console.log("hell world 1");
  // });
}

// function hello() {
//   console.log("hello red world");
// }

// hello();
dataFetch();
