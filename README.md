# Short task description

Project is a simplified code editor interface (similar to leetcode.com) where users can write code in one of two specified languages (for example, Go and Python), submit it "to the server" (simulating a server) for execution, and receive the results.

# Getting Started with the project

### `npm i`
### `npm start`


# Mock Server

Mock Server responds with object
### {
###    status: string,
###    output: string,
### }

`status` can be either `success` or `error`. It responds with  `error` for every input on any language, except for 1 case.

For Mock Server to respond with `success`, the user needs to send the following code (regardless of the programming language)
```
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
};
```

# Possible improvement ways

1) several color themes
2) separate tab for tests
3) tips for solving
4) community tabs(solutions, discussion)