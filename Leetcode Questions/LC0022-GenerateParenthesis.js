/*
22. Generate parenthesis  STILL WORKING ON THIS ONE

*/
// If you have two stacks, one for n "(", the other for n ")", you generate a binary tree from these two stacks of left/right parentheses to form an output string.

// This means that whenever you traverse deeper, you pop one parentheses from one of stacks. When two stacks are empty, you form an output string.

// How to form a legal string? Here is the simple observation:

// For the output string to be right, stack of ")" most be larger than stack of "(". If not, it creates string like "())"
// Since elements in each of stack are the same, we can simply express them with a number. For example, left = 3 is like a stacks ["(", "(", "("]


var generateParenthesis = function(n) {
    var arr = [];
    compose(n, n, '');
    return arr;
  
    function compose(left, right, str) {
      console.log("str at this time: " + str);
      console.log("left: " + left);
      console.log("right: "  + right);
      if (!left && !right && str.length) return arr.push(str);
      if (left) compose(left - 1, right, str + '(');
      if (right > left) compose(left, right - 1, str + ')');
    }
  };

  console.log(generateParenthesis(3));