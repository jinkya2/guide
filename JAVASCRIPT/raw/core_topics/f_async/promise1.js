console.log("promise init");

function example1() {
  let promise1 = new Promise(function (resolve, reject) {
    //setTimeout(function(){resolve("done")}, 1500);
    setTimeout(function () {
      reject(new Error("something is fishy..."));
    }, 1500);
  });

  console.log(`promise1`, promise1);
}

// example1();

function example2(){
    let promise2 = new Promise(function (resolve, reject) {
        resolve("done");
      });
      
      console.log(`promise2`, promise2);
}
// example2();

function example3(){
    promise1.then(
        function (result) {
          console.log(result);
        },
        function (error) {
          console.log(error);
        }
      );
}
// example3();

// Syntax
/*
new Promise(function (resolve, reject){
    resolve(result); // reject(error);
}).finally(function(){
    // cleanup work to do
    // If result is fetched success/failure, stop the loading spinner 
}).then(
    function(result){console.log(result)},
    function(error){console.log(error)}
).catch(function(error){    // this is similar to Promise(...).then(null, fn(e){...})
    console.log(error)
})
*/

// example
/*
const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
fetchPromise.then(
    function(result){return result.json()},
    function(error){console.log(error)}
).then(function(data){
    console.log(data);
})
*/

function chainPromised() {
  fetch("https://javascript.info/article/promise-chaining/user.json")
    .then((response) => response.json())
    .then((user) => fetch(`https://api.github.com/users/${user.name}`))
    .then((response) => response.json())
    .then(
      (gitHubUser) =>
        new Promise(function (resolve, reject) {
          console.log(gitHubUser);
          const img = document.createElement("img");
          img.src = gitHubUser.avatar_url;
          document.body.append(img);

          setTimeout(function () {
            img.remove();
            resolve(gitHubUser);
          }, 4000);
        })
    )
    .then((gitHubUser) => alert(`finished displaying ${gitHubUser.name}`));
}
chainPromised();


