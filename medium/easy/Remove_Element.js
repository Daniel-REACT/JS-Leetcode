let removeElement = function(nums, val) {
    
    let   index = 0;

    for(let i = 0; i < nums.length; i++)
    {
        if (nums[i] == val)
        {
            nums.splice(i, 1);
            i--;
        }
    }
    console.log(nums);
    return (nums.length);

};

console.log(removeElement([3,2,2,3,3,3,2,1,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));