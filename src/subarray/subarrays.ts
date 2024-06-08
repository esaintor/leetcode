// 523. Continuous Subarray Sum
// Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.
// A good subarray is a subarray where:
// - its length is at least two, and
// - the sum of the elements of the subarray is a multiple of k.
function checkSubarraySum(nums: number[], k: number): boolean {
  const len = nums.length
  let sum = 0
  let prefix = 0
  const remainder = new Set()
  for (let i = 0; i < len; i++) {
    console.log('prev:', sum)
    sum += nums[i]
    if (k != 0) sum %= k
    console.log('num:', nums[i], '\nsum:', sum, '\nprefix:', prefix, '\nremainder:', remainder)
    if (remainder.has(sum)) return true
    remainder.add(prefix)
    prefix = sum
  }
  return false
}

// 560. Subarray Sum Equals K
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.
function subarraySum(nums: number[], k: number): number {
  let sum = 0
  let count = 0
  const map = { 0 : 1}
  for (const num of nums) {
    sum += num
    const rem = sum - k
    if (map[rem]) {
      count += map[rem]
    }
    map[sum] = (map[sum] || 0) + 1
  }
  return count
}

export { checkSubarraySum, subarraySum }
