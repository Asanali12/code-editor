import { type LanguageName } from '@uiw/codemirror-extensions-langs';

type LanguageStringData = {
    [K in LanguageName]: string
}

export const languageList = [
    'javascript',
    'python',
    'c',
    'java',
] as Partial<LanguageName>[]

export const defaultCodeValues = {
    'javascript': `var twoSum = function(nums, target) {
    
};`,
    'python': `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        `,
    'c': `int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    
}`,
    'java': `class Solution {
    public int[] twoSum(int[] nums, int target) {
        
    }
}`,
} as Partial<LanguageStringData>

export const languageModes = {
    'javascript': 'text/javascript',
    'python': 'text/x-python',
    'c': 'text/x-csrc',
    'java': 'text/x-java',
} as Partial<LanguageStringData>