---
title: '739. Daily Temperatures'
link: 'https://leetcode.com/problems/daily-temperatures'
date: 2019-11-22
slug: '0739-daily-temperatures'
tags:
  - leetcode
  - algorithms
  - stack
category: problems
---

```js
/**
 * @param {number[]} T
 * @return {number[]}
 */

//iterative O(n^2) time complexity
var dailyTemperatures = function(T) {
	const res = [],
		len = T.length

	T.forEach((temp, i) => {
		for (let j = i + 1; j < len; j++) {
			if (T[j] > temp) {
				res[i] = j - i
				break
			} else {
				res[i] = 0
			}
		}
	})
	res.push(0) //last item will always be 0
	return res
}

var dailyTemperatures = function(T) {
	const res = [],
		len = T.length,
		stack = []
}

T = [73, 74, 75, 71, 69, 72, 76, 73]

//Test cases
console.log(dailyTemperatures(T))
```
