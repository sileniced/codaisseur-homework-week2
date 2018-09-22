const giveItBackLater = (value, callback) => setTimeout(() => callback(value), 100);

const promiseToGiveItBackLater = value => new Promise(resolve => setTimeout(() => resolve(value), 100));

const addSomePromises = somePromise => new Promise(resolve =>
  resolve(somePromise
  .then(res => res + res)
  .catch(err => err + err + err))
);

module.exports = {
  giveItBackLater,
  promiseToGiveItBackLater,
  addSomePromises
};