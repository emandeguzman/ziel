// function slowlyResolvedPromiseFunc(string) { 
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(string);
//         return;
//       }, 100);
//     });
//   }
  
//   async function doIt() {
//     const myPromise = await slowlyResolvedPromiseFunc("foo");
//     console.log(myPromise); // "foo"
//   }
  
//   doIt();