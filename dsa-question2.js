/**
 Question 2: DSA 
 Given an array of integers nums and an integer target, 
 return the indices of the two numbers such that they add up to target. 
 You may assume that each input would have exactly one solution, 
 and you may not use the same element twice. 
 You can return the answer in any order.

    For example, given:

    const nums = [2, 7, 11, 15];

    const target = 9;

    The function should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.P
*/

function sumOfTwoValue(nums, target){
    if(!Array.isArray(nums)){
        return null;
    }

    const length = nums.length;
    const numsMap = {};

    for(let i=0; i < length; i++){
        const remaining = target - nums[i];
        if(remaining in numsMap){
            return [numsMap[remaining], i];
        }
        numsMap[nums[i]] = i;
    }

    return [];
}

const testCases = [
    {
        nums: [2,7,11,15],
        target: 9
    },
    {
        nums: [2,7,11,15],
        target: 2
    },
    {
        nums: [2,7,11,15],
        target: 18
    },
    {
        nums: [2],
        target: 3
    },
    {
        nums: [2,7,11,15],
        target: 0
    },
    {
        nums: [0, -1, 2, -3, 1],
        target: -2
    },
    {
        nums: [2,7,11,15],
        target: null
    }
];

testCases.forEach((element, i) => {
    console.log(`Test Case ${i+1}: `, sumOfTwoValue(element.nums, element.target));
});