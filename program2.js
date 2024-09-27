const decodeTheRing = function (s, p) {

    // write your code here

    function isMatch(message, pattern) {
      const memo = {};
    
      function dfs(mIndex, pIndex) {
        const key = ${mIndex}:${pIndex};
        if (key in memo) return memo[key];
    
        // If both message and pattern are fully processed
        if (mIndex >= message.length && pIndex >= pattern.length) {
          return true;
        }
    
        // If pattern is consumed but message is not
        if (pIndex >= pattern.length) {
          return false;
        }
    
        // If current pattern character is '*'
        if (pattern[pIndex] === '*') {
          // * can represent zero or more characters
          if (dfs(mIndex, pIndex + 1) || (mIndex < message.length && dfs(mIndex + 1, pIndex))) {
            memo[key] = true;
            return true;
          }
        }
    
        // If current pattern character is '?'
        if (pattern[pIndex] === '?' && mIndex < message.length) {
          if (dfs(mIndex + 1, pIndex + 1)) {
            memo[key] = true;
            return true;
          }
        }
    
        // Check if characters match
        if (mIndex < message.length && pattern[pIndex] === message[mIndex]) {
          if (dfs(mIndex + 1, pIndex + 1)) {
            memo[key] = true;
            return true;
          }
        }
    
        memo[key] = false;
        return false;
      }
    
      return dfs(0, 0);
    }

  };
  
  module.exports = decodeTheRing;