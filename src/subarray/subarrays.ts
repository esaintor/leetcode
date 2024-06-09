// 523. Continuous Subarray Sum
// Given an integer array nums and an integer k,return
// true if nums has a good subarray or false otherwise.
// A good subarray is a subarray where:
// - its length is at least two, and
// - the sum of the elements of the subarray is a multiple of k.
// function checkSubarraySum(nums: number[], k: number): boolean {
//   let sum = 0
//   let prev = 0
//   const remainder = new Set()
//   for (const num of nums) {
//     sum += num
//     if (k != 0) sum %= k
//     if (remainder.has(sum)) return true
//     remainder.add(prev)
//     prev = sum
//   }
//   return false
// }

function checkSubarraySum(nums: number[], k: number): boolean {
  let sum = 0
  const mem = new Map().set(0, -1)
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    const s = sum % k
    if (!mem.has(s)) mem.set(s, i)
    else if (i - mem.get(s) > 1) return true
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

// 974. Subarray Sums Divisible by K
// Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.
function subarraysDivByK(nums: number[], k: number): number {
  let count = 0
  let sum = 0
  const rem = { 0: 1 }
  for (const num of nums) {
    sum += num
    let r = sum % k
    if (r < 0) r = k + r
    if (r in rem) {
      count += rem[r]
      rem[r]++
    } else {
      rem[r] = 1
    }
  }
  return count
}

export { checkSubarraySum, subarraySum, subarraysDivByK }
