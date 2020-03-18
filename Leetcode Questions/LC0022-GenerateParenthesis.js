/*
22. Generate parenthesis  STILL WORKING ON THIS ONE

*/
// If you have two stacks, one for n "(", the other for n ")", you generate a binary tree from these two stacks of left/right parentheses to form an output string.

// This means that whenever you traverse deeper, you pop one parentheses from one of stacks. When two stacks are empty, you form an output string.

// How to form a legal string? Here is the simple observation:

// For the output string to be right, stack of ")" most be larger than stack of "(". If not, it creates string like "())"
// Since elements in each of stack are the same, we can simply express them with a number. For example, left = 3 is like a stacks ["(", "(", "("]

// def generateParenthesis(self, n):
//     if not n:
//         return []
//     left, right, ans = n, n, []
//     self.dfs(left,right, ans, "")
//     return ans

// def dfs(self, left, right, ans, string):
//     if right < left:
//         return
//     if not left and not right:
//         ans.append(string)
//         return
//     if left:
//         self.dfs(left-1, right, ans, string + "(")
//     if right:
//         self.dfs(left, right-1, ans, string + ")")