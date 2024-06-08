import { checkSubarraySum } from './subarrays'

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
})
