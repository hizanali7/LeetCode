/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    return strs.reduce((prefix, word) => {
    while (word.indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
    }
    return prefix;
  });
};