/**
 * // Promises
 *
 * pending
 * resolved
 * rejected
 
 *     // promise create
// resolved > the return success
// rejected > then return error
 new Promise((resolved, rejected) =>{

 })
 */

const myPromise = new Promise((resolved, rejected) => {
  const user = { id: 1 };
  if (!user) {
    rejected("something went wrong!");
  } else {
    setTimeout(() => {
      resolved({ name: "john" });
    }, 1000);
  }
});

const userIds = [1, 2, 3, 4, 5, 6, 7];
const userData = [];
for (let i = 0; i < userIds.length; i++) {
  const userId = userIds[i];
  userData.push(myPromise);
}

// multiple promise handle wary
Promise.all(userData).then((res) => {
  console.log(res);
});

// console.log("User Data: ",userData);

myPromise
  .then((res) => console.log("Success: ", res))
  .catch((error) => console.log("Error: ", error));

console.log("Done");
