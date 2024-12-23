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