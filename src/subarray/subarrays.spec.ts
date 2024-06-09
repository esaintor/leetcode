import { checkSubarraySum, subarraysDivByK } from './subarrays'

describe('run all', () => {
  describe('check subarray sum', () => {
    it('[27, 2, 4, 6, 7], 6', () => {
      const result = checkSubarraySum([27, 2, 4, 6, 7], 6)
      expect(result).toBeTruthy()
    })

    it('[27, 2, 4, 6, 7], 6', () => {
      const result = checkSubarraySum([23, 2, 4, 6, 7], 6)
      expect(result).toBeTruthy()
    })

    it('[0, 0], 1', () => {
      const result = checkSubarraySum([0, 0], 1)
      expect(result).toBeTruthy()
    })
    it('[23, 2, 4, 6, 6], 7', () => {
      const result = checkSubarraySum([23, 2, 4, 6, 6], 7)
      expect(result).toBeTruthy()
    })
    it('[5, 0, 0, 0, 0], 3', () => {
      const result = checkSubarraySum([5, 0, 0, 0, 0], 3)
      expect(result).toBeTruthy()
    })
  })

  describe('subarray sum', () => {
    it('[1,1,1], 2', () => {
      const result = checkSubarraySum([1, 1, 1], 2)
      expect(result).toBeTruthy()
    })

    it('[1,2,3], 3', () => {
      const result = checkSubarraySum([1, 2, 3], 3)
      expect(result).toBeTruthy()
    })
  })

  describe('subarray sum count', () => {
    it('[4, 5, 0, -2, -3, 1], 5', () => {
      const result = subarraysDivByK([4, 5, 0, -2, -3, 1], 5)
      expect(result).toBe(7)
    })

    it('[5], 9', () => {
      const result = subarraysDivByK([5], 9)
      expect(result).toBe(0)
    })

    it('[1, -1, 0], 0', () => {
      const result = subarraysDivByK([1, -1, 0], 0)
      expect(result).toBe(3)
    })
  })
})
