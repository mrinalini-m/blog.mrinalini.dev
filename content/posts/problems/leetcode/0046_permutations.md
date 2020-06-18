---
title: 46. Permutations.js
date: 2020-06-12
slug: 0046-permutations
link: 'https://leetcode.com/problems/permutations'
tags:
  - recursion
category: problems
---

### Optimized backtracking

```js
/* 
Time Complexity - O(n * n!)
Space Complexity - O(n * n!)
*/
function swap(arr, i, j) {
	const temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

function permute(nums) {
	const result = [],
		len = nums.length

	function pHelper(i, slate) {
		if (len === i) {
			result.push(slate.slice(0))
			return
		}

		for (let pick = i; pick < len; pick++) {
			swap(nums, pick, i)

			slate.push(nums[i])
			pHelper(i + 1, slate)
			slate.pop()

			swap(nums, pick, i)
		}
	}

	pHelper(nums, 0, [])
	return result
}

// Tests
console.log(permute([1, 2, 3]))
```

```js
// First attempt
var permute = function(nums) {
	const result = []

	function pHelper(slate, arr) {
		const len = arr.length

		if (len === 0) result.push(slate)
		else {
			for (let i = 0; i < len; i++) {
				pHelper([...slate, arr[i]], [...arr.slice(0, i), ...arr.slice(i + 1)])
			}
		}
	}

	pHelper([], nums)
	return result
}
```
