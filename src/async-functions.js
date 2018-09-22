const giveItBackLater = (value, callback) => setTimeout(() => callback(value), 100);

const promiseToGiveItBackLater = value => new Promise(resolve => setTimeout(() => resolve(value), 100));

const addSomePromises = somePromise => new Promise(resolve =>
  somePromise
  .then(res => resolve(res + res))
  .catch(err => resolve(err.repeat(3)))
);

module.exports = {
  giveItBackLater,
  promiseToGiveItBackLater,
  addSomePromises
};