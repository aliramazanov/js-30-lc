// 2715. Timeout Cancellation
// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

var cancellable = function (fn, args, t) {
  let timeoutId = setTimeout(() => {
    fn(...args);
  }, t);

  return () => {
    clearTimeout(timeoutId);
  };
};
