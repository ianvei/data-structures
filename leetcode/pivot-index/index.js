var pivotIndex = function(nums) {
    // for each number, 
    // store left sum (walk array backwards) 
    // store right sum (all after index)
    // if equal, return index.
    
    for(let i = 0; i < nums.length; i++){
        let leftSum = 0;
        let rightSum = 0;
        
        for(let j = i-1; j >= 0; j--){
            if(i < 0){
                leftSum += 0;
            } else {
                leftSum += nums[j];
                console.log('j', nums[j])
            }
        }
        
        for(let k = i+1; k < nums.length; k++){
            if(i > nums.length-1){
                rightSum += 0;
            } else {
                 rightSum += nums[k];
                console.log('k', nums[k])
            }
        }
        console.log('left', leftSum)
        console.log('right', rightSum)
        if(leftSum === rightSum){
            return i
        }
        
    }
    //[1,7,3,6,5,6]
    return -1
};

pivotIndex([2,1,-1]);