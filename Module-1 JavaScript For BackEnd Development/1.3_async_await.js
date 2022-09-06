// promise create

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 1000);
});

// async function
async function getData() {
  const res = await myPromise;
  console.log(res);
}
getData();

// fetch convert async a await

// fetch
fetch("here url")
  .then((res) => res.json())
  .then((data) => console.log(data));

// async a await
async function anyFunctionName() {
  const res = await fetch("");
  const data = await res.json();
  console.log(data);
}
anyFunctionName();
