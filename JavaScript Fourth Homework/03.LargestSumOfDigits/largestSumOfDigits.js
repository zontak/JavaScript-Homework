findLargestBySumOfDigits([5, 10, 15, 111]);
findLargestBySumOfDigits([33, 44, -99, 0, 20]);
findLargestBySumOfDigits(['hello']);
findLargestBySumOfDigits([5, 3.3]);

function findLargestBySumOfDigits(nums) {
    var maxSum = 0;
    for (var i = 0; i < nums.length; i++) {
        if (parseInt(nums[i]) != nums[i]) {
            return console.log(undefined);
        }
        var currentNum = Math.abs(nums[i]).toString();
        var currentSum = 0;
        for (var k = 0; k < currentNum.length; k++) {
            currentSum += Number(currentNum[k]);
        }
        if (maxSum < currentSum) {
            maxSum = currentSum;
            var result = nums[i];
        }
    }
    return console.log(result);
}