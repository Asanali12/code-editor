export const problems =[
    `
# Two Sum

## Problem #1

[Original problem on leetcode](https://leetcode.com/problems/two-sum/description/).

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

Example 1:

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

    Input: nums = [3,2,4], target = 6
    Output: [1,2]

Example 3:

    Input: nums = [3,3], target = 6
    Output: [0,1]


Tip:
There is only one working example of the submitted code (regardless of programming language).
If you just copy and paste below code, it will accept it (it should be exactly 11 lines).

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
`
]