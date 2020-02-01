let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(new Date()));
    }, 20000);
});
